function yanse(obj, color) {
    obj.itemStyle = {
        color: color,
        borderColor: color
    };
    obj.lineStyle = {
        color: color,
        borderColor: color
    };
    obj.label = {
        color: color,
        fontWeight: 'bold',
        fontSize: 14
    }

    if (obj.children && obj.children.length !== 0) {
        for (var i = 0; i < obj.children.length; i++) {
            obj.children[i].itemStyle = {
                color: color,
                borderColor: color
            };
            obj.children[i].lineStyle = {
                color: color,
                borderColor: color
            };
            yanse(obj.children[i], color)
        }
    }
}

function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x)
}

function getValue(obj) {
    let right = 0;
    if (obj.name.indexOf('重点实验室') !== -1 || obj.name.indexOf('前沿科学中心') !== -1) {
        right = 6
    } else {
        right = 3
    }
    if (obj.children && obj.children.length !== 0) {
        for (let i = 0; i < obj.children.length; i++) {
            right += getValue(obj.children[i])
        }
    }
    obj.right = parseInt(getBaseLog(3, right)) * 5
    return right;
}

function symbolSize(obj) {
    obj.symbolSize = obj.right
    if (obj.children && obj.children.length !== 0) {
        for (let i = 0; i < obj.children.length; i++) {
            symbolSize(obj.children[i])
        }
    }
}


var dom = document.getElementById('chart-container');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var option;


$.get('./all_data.json', function (data) {
    yanse(data.children[0], '#cb351d');
    yanse(data.children[1], '#cc6923');
    yanse(data.children[2], '#cc9930');
    yanse(data.children[3], '#d7c13b');
    yanse(data.children[4], '#3da82c');
    yanse(data.children[5], '#1458b2');


    yanse(data.children[6], '#d04e20');
    yanse(data.children[7], '#d2832c');
    yanse(data.children[8], '#d5b739');
    yanse(data.children[9], '#b4d038');
    yanse(data.children[10], '#40b492');
    yanse(data.children[11], '#9038ab');

    getValue(data)
    console.log(data)
    symbolSize(data)


    var cate = data.children.map(function (a) {
        return {name: a.name};
    })

    myChart.setOption(
        (option = {
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
            },
            series: [
                {
                    type: 'tree',
                    data: [data],
                    top: '-8%',
                    bottom: '-8%',
                    layout: 'radial',
                    symbol: 'emptyCircle',
                    // symbolKeepAspect: 'true',
                    categories: cate,
                    roam: true,
                    symbolSize: 10,
                    initialTreeDepth: 2,
                    animationDurationUpdate: 750,
                    emphasis: {
                        focus: 'relative'
                    },
                    labelLayout: {
                        hideOverlap: true
                    },
                }
            ],
        })
    );


})


if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);
