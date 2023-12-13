var dom = document.getElementById('chart-container');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};
var ROOT_PATH = 'https://echarts.apache.org/examples';
var option;

var data = {
    "name": "农业",
    "children": [
        {
            "name": "作物学",
            "children": [
                {
                    "name": "作物栽培学与耕作学",
                    "children": [
                        {
                            "name": "作物生态学",
                            "value": 1
                        },
                        {
                            "name": "智慧农作",
                            "value": 1
                        },
                        {
                            "name": "作物生理学",
                            "value": 1
                        },
                        {
                            "name": "作物栽培学",
                            "value": 1
                        }
                    ]
                },
                {
                    "name": "作物遗传育种",
                    "children": [
                        {
                            "name": "作物种质资源",
                            "children": [
                                {
                                    "name": "华北作物种质资源研究与利用教育部重点实验室",
                                    "value": 1
                                },
                                {
                                    "name": "寒地粮食作物种质创新与生理生态教育部重点实验室",
                                    "value": 1
                                }
                            ]
                        },
                        {
                            "name": "作物基因组学",
                            "children": [
                                {
                                    "name": "西南作物基因资源与遗传改良教育部重点实验室",
                                    "value": 1
                                },
                                {
                                    "name": "作物遗传改良全国重点实验室",
                                    "value": 1
                                },
                                {
                                    "name": "作物抗逆与高效生产全国重点实验室",
                                    "value": 1
                                },
                                {
                                    "name": "植物功能基因组学教育部重点实验室",
                                    "value": 1
                                }
                            ]
                        },
                        {
                            "name": "作物遗传育种",
                            "children": [
                                {
                                    "name": "北方超级粳稻育种教育部重点实验室",
                                    "value": 1
                                },
                                {
                                    "name": "作物遗传育种与综合利用教育部重点实验室",
                                    "value": 1
                                },
                                {
                                    "name": "大豆生物学教育部重点实验室",
                                    "value": 1
                                },
                                {
                                    "name": "杂交水稻全国重点实验室",
                                    "value": 1
                                },
                                {
                                    "name": "作物遗传与种质创新利用全国重点实验室",
                                    "value": 1
                                },
                                {
                                    "name": "玉米生物育种全国重点实验室",
                                    "value": 1
                                },
                                {
                                    "name": "分子设计育种前沿科学中心",
                                    "value": 1
                                },
                                {
                                    "name": "作物智能育种",
                                    "value": 1
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "种子科学与技术",
                    "children": [
                        {
                            "name": "种子发育生物学",
                            "value": 1
                        },
                        {
                            "name": "种子质量与健康",
                            "children": [
                                {
                                    "name": "作物杂种优势研究与利用教育部重点实验室",
                                    "value": 1
                                }
                            ]
                        },
                        {
                            "name": "种子储藏与加工",
                            "value": 1
                        }
                    ]
                }
            ]
        },
        {
            "name": "农业生物工程",
            "children": [
                {
                    "name": "植物生物工程",
                    "children": [
                        {
                            "name": "植物基因工程",
                            "children": [
                                {
                                    "name": "植物功能基因组学教育部重点实验室",
                                    "value": 1
                                }
                            ]
                        },
                        {
                            "name": "植物细胞工程",
                            "value": 1
                        }
                    ]
                },
                {
                    "name": "动物（水产）生物工程",
                    "children": [
                        {
                            "name": "动物（水产）基因工程",
                            "children": [
                                {
                                    "name": "水产种质资源发掘与利用教育部重点实验室",
                                    "value": 1
                                }
                            ]
                        },
                        {
                            "name": "动物（水产）细胞工程",
                            "value": 1
                        }
                    ]
                },
                {
                    "name": "微生物工程",
                    "children": [
                        {
                            "name": "微生物基因工程",
                            "children": [
                                {
                                    "name": "农业微生物资源发掘与利用全国重点实验室",
                                    "value": 1
                                }
                            ]
                        },
                        {
                            "name": "微生物发酵工程",
                            "value": 1
                        }
                    ]
                }
            ]
        },
        {
            "name": "园艺学",
            "children": [
                {
                    "name": "蔬菜学",
                    "children": [
                        {
                            "name": "蔬菜栽培学",
                            "value": 1
                        },
                        {
                            "name": "蔬菜育种学",
                            "value": 1
                        },
                        {
                            "name": "蔬菜发育和采后生物学",
                            "value": 1
                        },
                        {
                            "name": "园艺设施与环境",
                            "children": [
                                {
                                    "name": "设施园艺教育部重点实验室",
                                    "value": 1
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "果树学",
                    "children": [
                        {
                            "name": "果树栽培学",
                            "value": 1
                        },
                        {
                            "name": "果树育种学",
                            "children": [
                                {
                                    "name": "园艺植物生物学教育部重点实验室",
                                    "value": 1
                                },
                                {
                                    "name": "南方山地园艺学教育部重点实验室",
                                    "value": 1
                                },
                                {
                                    "name": "园艺作物种质创新与利用全国重点实验室",
                                    "value": 1
                                }
                            ]
                        },
                        {
                            "name": "果树发育和采后生物学",
                            "value": 1
                        }
                    ]
                },
                {
                    "name": "观赏园艺学",
                    "children": [
                        {
                            "name": "观赏植物栽培学",
                            "value": 1
                        },
                        {
                            "name": "观赏植物育种学",
                            "value": 1
                        },
                        {
                            "name": "观赏植物发育和采后生物学",
                            "value": 1
                        }
                    ]
                },
                {
                    "name": "茶学",
                    "children": [
                        {
                            "name": "茶树栽培学",
                            "children": [
                                {
                                    "name": "茶学教育部重点实验室",
                                    "value": 1
                                },
                                {
                                    "name": "茶叶生物化学与生物技术教育部重点实验室",
                                    "value": 1
                                }
                            ]
                        },
                        {
                            "name": "茶树育种学",
                            "children": [
                                {
                                    "name": "普洱茶学教育部重点实验室",
                                    "value": 1
                                }
                            ]
                        },
                        {
                            "name": "茶叶加工学",
                            "value": 1
                        }
                    ]
                },
                {
                    "name": "西甜瓜学",
                    "children": [
                        {
                            "name": "西甜瓜栽培学",
                            "value": 1
                        },
                        {
                            "name": "西甜瓜育种学",
                            "value": 1
                        }
                    ]
                },
                {
                    "name": "食用真菌学",
                    "children": [
                        {
                            "name": "食用真菌栽培学",
                            "value": 1
                        },
                        {
                            "name": "食用真菌育种学",
                            "value": 1
                        }
                    ]
                }
            ]
        },
        {
            "name": "农业资源学",
            "children": [
                {
                    "name": "土壤学",
                    "children": [
                        {
                            "name": "土壤培肥与耕地质量提升",
                            "children": [
                                {
                                    "name": "植物-土壤相互作用教育部重点实验室",
                                    "value": 1
                                }
                            ]
                        },
                        {
                            "name": "土壤侵蚀与水土保持",
                            "value": 1
                        },
                        {
                            "name": "土壤污染与修复",
                            "value": 1
                        }
                    ]
                },
                {
                    "name": "植物营养学",
                    "children": [
                        {
                            "name": "养分资源高效利用",
                            "children": [
                                {
                                    "name": "植物抗逆高效全国重点实验室",
                                    "value": 1
                                }
                            ]
                        },
                        {
                            "name": "新型肥料与数字化施肥",
                            "value": 1
                        },
                        {
                            "name": "农业废弃物资源化利用",
                            "value": 1
                        },
                        {
                            "name": "植物营养分子生物学",
                            "value": 1
                        }
                    ]
                },
                {
                    "name": "土地资源",
                    "children": [
                        {
                            "name": "土地资源与土地系统",
                            "value": 1
                        }
                    ]
                },
                {
                    "name": "农业气象",
                    "children": [
                        {
                            "name": "应用气象监测与预测",
                            "value": 1
                        },
                        {
                            "name": "气候变化影响与适应",
                            "value": 1
                        }
                    ]
                }
            ]
        },
        {
            "name": "植物保护",
            "children": [
                {
                    "name": "植物病理学",
                    "children": [
                        {
                            "name": "植物真菌病害及防治",
                            "value": 1
                        },
                        {
                            "name": "植物细菌病害及防治",
                            "value": 1
                        },
                        {
                            "name": "植物病毒病害及防治",
                            "value": 1
                        },
                        {
                            "name": "植物其他病害及防治",
                            "value": 1
                        }
                    ]
                },
                {
                    "name": "农业昆虫学",
                    "children": [
                        {
                            "name": "粮食作物害虫及防治",
                            "value": 1
                        },
                        {
                            "name": "园艺作物害虫及防治",
                            "value": 1
                        },
                        {
                            "name": "经济及其他作物害虫及防治",
                            "value": 1
                        }
                    ]
                },
                {
                    "name": "杂草学",
                    "children": [
                        {
                            "name": "农田杂草生物学",
                            "value": 1
                        },
                        {
                            "name": "农田杂草防控",
                            "value": 1
                        }
                    ]
                },
                {
                    "name": "农业鼠害及其他有害生物",
                    "children": [
                        {
                            "name": "农业鼠害及其他有害生物的生物学与防治",
                            "value": 1
                        }
                    ]
                },
                {
                    "name": "农药学",
                    "children": [
                        {
                            "name": "农药合成",
                            "children": [
                                {
                                    "name": "农药与化学生物学教育部重点实验室",
                                    "value": 1
                                }
                            ]
                        },
                        {
                            "name": "农药加工与使用",
                            "value": 1
                        },
                        {
                            "name": "农药毒理学与有害生物抗药性",
                            "value": 1
                        },
                        {
                            "name": "农药环境学",
                            "value": 1
                        }
                    ]
                },
                {
                    "name": "生物防治",
                    "children": [
                        {
                            "name": "农业有害生物生物防治与综合防控",
                            "children": [
                                {
                                    "name": "生物农药与化学生物学教育部重点实验室",
                                    "value": 1
                                },
                                {
                                    "name": "农业生物多样性与病虫害控制教育部重点实验室",
                                    "value": 1
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "植物免疫与植物保护新技术",
                    "children": [
                        {
                            "name": "植物免疫与抗病性",
                            "value": 1
                        },
                        {
                            "name": "植物免疫与抗虫性",
                            "value": 1
                        },
                        {
                            "name": "作物与有害生物互作",
                            "children": [
                                {
                                    "name": "农作物生物灾害综合治理教育部重点实验室",
                                    "value": 1
                                },
                                {
                                    "name": "热带农林生物灾害绿色防控教育部重点实验室",
                                    "value": 1
                                },
                                {
                                    "name": "植保资源与病虫害治理教育部重点实验室",
                                    "value": 1
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "植物生物安全",
                    "children": [
                        {
                            "name": "植物检疫",
                            "value": 1
                        },
                        {
                            "name": "入侵生物",
                            "value": 1
                        }
                    ]
                }
            ]
        },
        {
            "name": "应用生态学",
            "children": [
                {
                    "name": "农业生态学",
                    "children": [
                        {
                            "name": "土壤生物及土壤生态",
                            "children": [
                                {
                                    "name": "东北盐碱植被恢复与重建教育部重点实验室",
                                    "value": 1
                                }
                            ]
                        },
                        {
                            "name": "景观生态与土地利用",
                            "value": 1
                        }
                    ]
                },
                {
                    "name": "森林生态",
                    "children": [
                        {
                            "name": "森林结构与功能",
                            "children": [
                                {
                                    "name": "西藏高原森林生态教育部重点实验室",
                                    "value": 1
                                }
                            ]
                        },
                        {
                            "name": "森林修复与重建",
                            "children": [
                                {
                                    "name": "森林生态系统可持续经营教育部重点实验室",
                                    "value": 1
                                }
                            ]
                        },
                        {
                            "name": "森林生态系统服务与管理",
                            "value": 1
                        }
                    ]
                },
                {
                    "name": "草原生态",
                    "children": [
                        {
                            "name": "草原结构与功能",
                            "children": [
                                {
                                    "name": "三江源区高寒草地生态教育部重点实验室",
                                    "value": 1
                                }
                            ]
                        },
                        {
                            "name": "草原修复与重建",
                            "children": [
                                {
                                    "name": "草种创新与草地农业生态系统全国重点实验室",
                                    "value": 1
                                }
                            ]
                        },
                        {
                            "name": "草原生态系统服务与管理",
                            "children": [
                                {
                                    "name": "草地资源教育部重点实验室",
                                    "value": 1
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "湿地生态",
                    "children": [
                        {
                            "name": "湿地演替与生态过程",
                            "value": 1
                        },
                        {
                            "name": "湿地生态系统管理",
                            "value": 1
                        },
                        {
                            "name": "湿地恢复",
                            "value": 1
                        }
                    ]
                },
                {
                    "name": "荒漠生态",
                    "children": [
                        {
                            "name": "荒漠结构与功能",
                            "value": 1
                        },
                        {
                            "name": "荒漠生态系统保护",
                            "value": 1
                        },
                        {
                            "name": "荒漠生态系统管理",
                            "children": [
                                {
                                    "name": "绿洲生态教育部重点实验室",
                                    "value": 1
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "环境生态学",
                    "children": [
                        {
                            "name": "资源环境与可持续发展",
                            "children": [
                                {
                                    "name": "珍稀濒危动植物生态与环境保护教育部重点实验室",
                                    "value": 1
                                },
                                {
                                    "name": "热带岛屿生态学教育部重点实验室",
                                    "value": 1
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "林学",
            "children": [
                {
                    "name": "森林培育",
                    "children": [
                        {
                            "name": "林木遗传育种",
                            "children": [
                                {
                                    "name": "热带特色林木花卉遗传与种质创新教育部重点实验室",
                                    "value": 1
                                },
                                {
                                    "name": "林木遗传与生物技术教育部重点实验室",
                                    "value": 1
                                }
                            ]
                        },
                        {
                            "name": "森林培育",
                            "children": [
                                {
                                    "name": "森林培育与保护教育部重点实验室",
                                    "value": 1
                                },
                                {
                                    "name": "西南山地森林资源保育与利用教育部重点实验室",
                                    "value": 1
                                },
                                {
                                    "name": "",
                                    "value": 1
                                },
                                {
                                    "name": "森林经理",
                                    "value": 1
                                },
                                {
                                    "name": "经济林",
                                    "children": [
                                        {
                                            "name": "经济林培育与保护教育部重点实验室",
                                            "value": 1
                                        },
                                        {
                                            "name": "竹业科学与技术教育部重点实验室",
                                            "value": 1
                                        }
                                    ]
                                },
                                {
                                    "name": "园林植物与观赏园艺",
                                    "children": [
                                        {
                                            "name": "林木、花卉遗传育种教育部重点实验室",
                                            "value": 1
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "森林保护",
                    "children": [
                        {
                            "name": "森林病理",
                            "value": 1
                        },
                        {
                            "name": "森林昆虫",
                            "value": 1
                        },
                        {
                            "name": "森林火灾与其他灾害",
                            "value": 1
                        }
                    ]
                },
                {
                    "name": "生物多样性保护",
                    "children": [
                        {
                            "name": "野生植物保护",
                            "value": 1
                        },
                        {
                            "name": "野生动物保护",
                            "children": [
                                {
                                    "name": "西南野生动植物资源保护教育部重点实验室",
                                    "value": 1
                                }
                            ]
                        },
                        {
                            "name": "野生动植物资源利用",
                            "children": [
                                {
                                    "name": "西部特色生物资源保护与利用教育部重点实验室",
                                    "value": 1
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "水土保持与荒漠化防治",
                    "children": [
                        {
                            "name": "水土保持",
                            "value": 1
                        },
                        {
                            "name": "荒漠化防治",
                            "value": 1
                        },
                        {
                            "name": "防护林",
                            "value": 1
                        }
                    ]
                }
            ]
        },
        {
            "name": "农业工程",
            "children": [
                {
                    "name": "农业机械化工程",
                    "children": [
                        {
                            "name": "种植业机械化工程",
                            "value": 1
                        },
                        {
                            "name": "养殖业机械化工程",
                            "value": 1
                        },
                        {
                            "name": "加工业机械化工程",
                            "value": 1
                        }
                    ]
                },
                {
                    "name": "农业水土工程",
                    "children": [
                        {
                            "name": "灌溉排水理论与技术",
                            "value": 1
                        },
                        {
                            "name": "灌溉排水工程与装备",
                            "value": 1
                        },
                        {
                            "name": "农业水土资源环境与管理",
                            "children": [
                                {
                                    "name": "农业水资源高效利用全国重点实验室",
                                    "value": 1
                                }
                            ]
                        },
                        {
                            "name": "农田雨水利用理论与技术",
                            "value": 1
                        }
                    ]
                },
                {
                    "name": "农业信息化工程",
                    "children": [
                        {
                            "name": "农业信息感知与获取",
                            "children": [
                                {
                                    "name": "农业生物信息教育部重点实验室",
                                    "value": 1
                                }
                            ]
                        },
                        {
                            "name": "农业大数据处理与分析",
                            "value": 1
                        },
                        {
                            "name": "农业物联网系统",
                            "value": 1
                        },
                        {
                            "name": "农业信息化管理与服务",
                            "value": 1
                        }
                    ]
                },
                {
                    "name": "农产品加工与贮藏工程",
                    "children": [
                        {
                            "name": "粮油加工与贮藏工程",
                            "value": 1
                        },
                        {
                            "name": "果蔬加工与贮藏工程",
                            "value": 1
                        },
                        {
                            "name": "畜禽水产加工与贮藏工程",
                            "value": 1
                        },
                        {
                            "name": "特色农产品加工与贮藏工程",
                            "value": 1
                        }
                    ]
                }
            ]
        },
        {
            "name": "林业工程",
            "children": [
                {
                    "name": "森林工程",
                    "children": [
                        {
                            "name": "林业装备与信息化",
                            "value": 1
                        },
                        {
                            "name": "人机环境与安全",
                            "value": 1
                        },
                        {
                            "name": "森林及其环境信息检测",
                            "children": [
                                {
                                    "name": "森林植物生态学教育部重点实验室",
                                    "value": 1
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "木材科学与技术",
                    "children": [
                        {
                            "name": "木材结构与性质",
                            "children": [
                                {
                                    "name": "木质材料科学与应用教育部重点实验室",
                                    "value": 1
                                }
                            ]
                        },
                        {
                            "name": "木材保护与改良",
                            "value": 1
                        },
                        {
                            "name": "木材复合与重组",
                            "value": 1
                        }
                    ]
                },
                {
                    "name": "林产化学加工工程",
                    "children": [
                        {
                            "name": "树木分泌物与提取物",
                            "value": 1
                        },
                        {
                            "name": "木质纤维利用基础",
                            "value": 1
                        },
                        {
                            "name": "树木组分化学与利用基础",
                            "value": 1
                        }
                    ]
                }
            ]
        },
        {
            "name": "畜牧学",
            "children": [
                {
                    "name": "动物遗传育种学",
                    "children": [
                        {
                            "name": "畜禽种质资源鉴定与保护",
                            "children": [
                                {
                                    "name": "青藏高原动物遗传资源保护与利用教育部重点实验室",
                                    "value": 1
                                }
                            ]
                        },
                        {
                            "name": "畜禽性状形成的基础",
                            "value": 1
                        },
                        {
                            "name": "畜禽种质创新与新品种培育",
                            "children": [
                                {
                                    "name": "畜禽生物育种全国重点实验室",
                                    "value": 1
                                },
                                {
                                    "name": "动物育种与健康养殖前沿科学中心",
                                    "value": 1
                                }
                            ]
                        },
                        {
                            "name": "畜禽育种新理论与新技术",
                            "value": 1
                        }
                    ]
                },
                {
                    "name": "动物繁殖学",
                    "children": [
                        {
                            "name": "畜禽生殖生理",
                            "children": [
                                {
                                    "name": "高原山地动物遗传育种与繁殖教育部重点实验室",
                                    "value": 1
                                }
                            ]
                        },
                        {
                            "name": "畜禽配子发生与胚胎发育",
                            "value": 1
                        },
                        {
                            "name": "畜禽繁殖调控新理论与新技术",
                            "value": 1
                        }
                    ]
                },
                {
                    "name": "动物饲养与饲料科学",
                    "children": [
                        {
                            "name": "畜禽消化生理与营养",
                            "children": [
                                {
                                    "name": "动物分子营养学教育部重点实验室",
                                    "value": 1
                                }
                            ]
                        },
                        {
                            "name": "畜禽营养代谢与调控",
                            "children": [
                                {
                                    "name": "动物抗病营养教育部重点实验室",
                                    "value": 1
                                }
                            ]
                        },
                        {
                            "name": "饲料资源营养价值评定与开发利用",
                            "children": [
                                {
                                    "name": "动物生产及产品质量安全教育部重点实验室",
                                    "value": 1
                                }
                            ]
                        },
                        {
                            "name": "饲料抗营养因子、毒素与安全",
                            "value": 1
                        }
                    ]
                },
                {
                    "name": "畜禽健康养殖与设施环境",
                    "children": [
                        {
                            "name": "畜禽养殖环境生理与健康",
                            "children": [
                                {
                                    "name": "草业生态系统教育部重点实验室",
                                    "value": 1
                                },
                                {
                                    "name": "牧草与特色作物生物学教育部重点实验室",
                                    "value": 1
                                }
                            ]
                        },
                        {
                            "name": "畜禽养殖设施与智能化",
                            "value": 1
                        },
                        {
                            "name": "畜禽行为与福利",
                            "value": 1
                        }
                    ]
                },
                {
                    "name": "特种经济动物与伴侣动物科学",
                    "children": [
                        {
                            "name": "特种经济动物资源与遗传育种",
                            "value": 1
                        },
                        {
                            "name": "特种经济动物繁殖与饲养",
                            "children": [
                                {
                                    "name": "资源昆虫高效养殖与利用全国重点实验室",
                                    "value": 1
                                },
                                {
                                    "name": "",
                                    "value": 1
                                }
                            ]
                        },
                        {
                            "name": "特种经济动物生理学基础与生物技术",
                            "value": 1
                        },
                        {
                            "name": "伴侣动物营养与健康",
                            "value": 1
                        }
                    ]
                }
            ]
        },
        {
            "name": "兽医学",
            "children": [
                {
                    "name": "基础兽医学",
                    "children": [
                        {
                            "name": "动物解剖学",
                            "value": 1
                        },
                        {
                            "name": "动物组织与胚胎学",
                            "value": 1
                        },
                        {
                            "name": "动物生理学",
                            "value": 1
                        },
                        {
                            "name": "动物病理学",
                            "value": 1
                        },
                        {
                            "name": "动物生物化学",
                            "value": 1
                        },
                        {
                            "name": "兽医生物工程",
                            "value": 1
                        }
                    ]
                },
                {
                    "name": "预防兽医学",
                    "children": [
                        {
                            "name": "兽医微生物学",
                            "value": 1
                        },
                        {
                            "name": "兽医免疫学",
                            "children": [
                                {
                                    "name": "禽类预防医学教育部重点实验室",
                                    "value": 1
                                },
                                {
                                    "name": "",
                                    "value": 1
                                }
                            ]
                        },
                        {
                            "name": "兽医传染病学",
                            "value": 1
                        },
                        {
                            "name": "兽医寄生虫学",
                            "value": 1
                        },
                        {
                            "name": "兽医公共卫生学",
                            "children": [
                                {
                                    "name": "人兽共患病研究教育部重点实验室",
                                    "value": 1
                                },
                                {
                                    "name": "动物病原与生物安全教育部重点实验室",
                                    "value": 1
                                },
                                {
                                    "name": "兽医公共卫生安全全国重点实验室",
                                    "value": 1
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "临床兽医学",
                    "children": [
                        {
                            "name": "兽医内科学",
                            "value": 1
                        },
                        {
                            "name": "兽医外科学",
                            "value": 1
                        },
                        {
                            "name": "兽医临床诊断学",
                            "value": 1
                        },
                        {
                            "name": "兽医产科学",
                            "value": 1
                        },
                        {
                            "name": "中兽医学",
                            "value": 1
                        }
                    ]
                },
                {
                    "name": "兽药学",
                    "children": [
                        {
                            "name": "兽医药理学",
                            "value": 1
                        },
                        {
                            "name": "兽医毒理学",
                            "value": 1
                        },
                        {
                            "name": "兽医药剂学",
                            "value": 1
                        },
                        {
                            "name": "兽医药代动力学",
                            "value": 1
                        },
                        {
                            "name": "兽医药物化学",
                            "value": 1
                        },
                        {
                            "name": "兽医药物分析学",
                            "value": 1
                        }
                    ]
                }
            ]
        },
        {
            "name": "水产学",
            "children": [
                {
                    "name": "水产生物遗传育种",
                    "children": [
                        {
                            "name": "鱼类遗传育种学",
                            "children": [
                                {
                                    "name": "水产生物技术教育部重点实验室",
                                    "value": 1
                                }
                            ]
                        },
                        {
                            "name": "甲壳类遗传育种学",
                            "value": 1
                        },
                        {
                            "name": "贝类遗传育种学",
                            "value": 1
                        },
                        {
                            "name": "藻类遗传育种学",
                            "value": 1
                        },
                        {
                            "name": "特色水产生物遗传育种学",
                            "children": [
                                {
                                    "name": "海洋生物遗传学与育种教育部重点实验室",
                                    "value": 1
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "水产养殖",
                    "children": [
                        {
                            "name": "水产生物繁殖与发育",
                            "children": [
                                {
                                    "name": "淡水鱼类资源与生殖发育教育部重点实验室",
                                    "value": 1
                                }
                            ]
                        },
                        {
                            "name": "水产动物营养与饲料学",
                            "value": 1
                        },
                        {
                            "name": "水产生物免疫学与病害控制",
                            "children": [
                                {
                                    "name": "水产动物疫病防控与健康养殖全国重点实验室",
                                    "value": 1
                                }
                            ]
                        },
                        {
                            "name": "水产养殖技术与工程",
                            "children": [
                                {
                                    "name": "海水养殖教育部重点实验室",
                                    "value": 1
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "捕捞与工程",
                    "children": [
                        {
                            "name": "水产捕捞理论与技术",
                            "children": [
                                {
                                    "name": "大洋渔业资源可持续开发教育部重点实验室",
                                    "value": 1
                                }
                            ]
                        },
                        {
                            "name": "渔具渔法学",
                            "children": [
                                {
                                    "name": "设施渔业教育部重点实验室",
                                    "value": 1
                                }
                            ]
                        },
                        {
                            "name": "渔场学",
                            "value": 1
                        },
                        {
                            "name": "远洋渔船与装备",
                            "value": 1
                        }
                    ]
                },
                {
                    "name": "渔业资源",
                    "children": [
                        {
                            "name": "水产生物多样性与保护生物学",
                            "children": [
                                {
                                    "name": "热带海洋生物资源利用与保护教育部重点实验室",
                                    "value": 1
                                }
                            ]
                        },
                        {
                            "name": "渔业资源评估与增殖",
                            "value": 1
                        },
                        {
                            "name": "渔业环境效应与生态修复",
                            "value": 1
                        }
                    ]
                }
            ]
        }
    ]
}


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
        color:color
    }

    if (obj.children && obj.children.length !== 0){
        for (var i = 0; i < obj.children.length; i++) {
            obj.children[i].itemStyle = {
                color: color,
                borderColor: color
            };
            obj.children[i].lineStyle = {
                color: color,
                borderColor: color
            };
            yanse(obj.children[i],color)
        }
    }
}
yanse(data.children[0], '#b4a26d');
yanse(data.children[1], '#945800');
yanse(data.children[2], '#59a972');
yanse(data.children[3], '#047a34');
yanse(data.children[4], '#bb5d3b');
yanse(data.children[5], '#a21c06');
yanse(data.children[6], '#728cb7');
yanse(data.children[7], '#1980e8');
yanse(data.children[8], '#b64b5b');
yanse(data.children[9], '#b70214');
yanse(data.children[10], '#3432d9');
yanse(data.children[11], '#010a9a');

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
                top: '18%',
                bottom: '14%',
                layout: 'radial',
                symbol: 'emptyCircle',
                symbolSize: 7,
                initialTreeDepth: 3,
                animationDurationUpdate: 750,
                emphasis: {
                    focus: 'descendant'
                },
                // lineStyle:{
                //     color: '#5470c6'
                // }
            }
        ],
        color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']
    })
);

// myChart.showLoading();
// $.get(ROOT_PATH + '/data/asset/data/flare.json', function (data) {
//     myChart.hideLoading();
//     myChart.setOption(
//         (option = {
//             tooltip: {
//                 trigger: 'item',
//                 triggerOn: 'mousemove'
//             },
//             series: [
//                 {
//                     type: 'tree',
//                     data: [data],
//                     top: '18%',
//                     bottom: '14%',
//                     layout: 'radial',
//                     symbol: 'emptyCircle',
//                     symbolSize: 7,
//                     initialTreeDepth: 3,
//                     animationDurationUpdate: 750,
//                     emphasis: {
//                         focus: 'descendant'
//                     }
//                 }
//             ]
//         })
//     );
// });

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);
