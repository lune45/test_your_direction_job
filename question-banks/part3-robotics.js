window.STAGE3_BANKS = window.STAGE3_BANKS || {};

window.STAGE3_BANKS.robotics = [
  {
    id: 's3_rb_01',
    phase: 'deep',
    cat: 'Robotics 深挖 / 主线选择',
    triggerDirs: ['localization_mapping', 'intelligent_mobility', 'robot_learning', 'interactive_robot'],
    text: '如果以后天天和机器人打交道，你最想把哪类问题摸透？',
    opts: [
      { t: '让机器人始终知道自己在哪、地图有没有跑偏', d: { localization_mapping: 3, sensor_fusion_rb: 1, visual_navigation: 1 } },
      { t: '让移动平台更会看路、判断局势、连续完成任务', d: { intelligent_mobility: 3, visual_navigation: 1, perception: 1 } },
      { t: '让机器人通过学习获得更通用的技能', d: { robot_learning: 3, embodied: 1, vla: 1 } },
      { t: '把交互、任务和整套机器人系统做成长期可用的产品', d: { interactive_robot: 3, collaborative_rb: 1, assistive_rb: 1 } }
    ]
  },
  {
    id: 's3_rb_02',
    phase: 'deep',
    cat: 'Robotics 深挖 / 感知问题',
    triggerDirs: ['sensor_fusion_rb', 'localization_mapping', 'visual_navigation', 'spatial_understanding'],
    text: '如果你更容易被机器人“怎么看懂现场”这件事勾住，最想长期啃哪类问题？',
    opts: [
      { t: '把多种传感器给出的线索捏成可靠判断，别一遇到干扰就乱', d: { sensor_fusion_rb: 3, localization_mapping: 1, spatial_understanding: 1 } },
      { t: '让机器人心里始终有数，知道自己在哪、地图有没有跑偏', d: { localization_mapping: 3, sensor_fusion_rb: 1, visual_navigation: 1 } },
      { t: '让机器人边移动边把空间、路线和可通行区域看明白', d: { visual_navigation: 3, localization_mapping: 1, intelligent_mobility: 1 } },
      { t: '让系统更会理解三维空间、目标关系和环境结构', d: { spatial_understanding: 3, sensor_fusion_rb: 1, visual_navigation: 1 } }
    ]
  },
  {
    id: 's3_rb_03',
    phase: 'deep',
    cat: 'Robotics 深挖 / 规划控制',
    triggerDirs: ['motion', 'mpc', 'robot_kinematics', 'robot_dynamics'],
    text: '如果你更在意“接下来该怎么动”，最想长期做哪类问题？',
    opts: [
      { t: '让系统在复杂环境里规划出可执行的动作路径', d: { motion: 3, robot_kinematics: 1, mpc: 1 } },
      { t: '让系统边看边调，始终把动作维持在稳定范围内', d: { mpc: 3, motion: 1, robot_dynamics: 1 } },
      { t: '把机构运动关系和几何约束建得更清楚', d: { robot_kinematics: 3, motion: 1, robot_dynamics: 1 } },
      { t: '把惯性、受力和真实动态影响下的行为建得更准', d: { robot_dynamics: 3, mpc: 1, motion: 1 } }
    ]
  },
  {
    id: 's3_rb_04',
    phase: 'deep',
    cat: 'Robotics 深挖 / 学习与具身',
    triggerDirs: ['robot_learning', 'vla', 'embodied', 'interactive_robot'],
    text: '如果你更好奇“机器人到底怎么学会东西”，最想长期啃哪类问题？',
    opts: [
      { t: '让机器人从数据和试错里学到可迁移技能', d: { robot_learning: 3, embodied: 1, vla: 1 } },
      { t: '让视觉、语言和动作真正接成一条链路', d: { vla: 3, embodied: 1, robot_learning: 1 } },
      { t: '让学习到的能力在真实环境里不轻易失效', d: { embodied: 3, robot_learning: 1, field_robotics: 1 } },
      { t: '把学到的能力真正做进可交互、可使用的机器人系统里', d: { interactive_robot: 3, vla: 1, assistive_rb: 1 } }
    ]
  },
  {
    id: 's3_rb_05',
    phase: 'deep',
    cat: 'Robotics 深挖 / 人与机器人',
    triggerDirs: ['assistive_rb', 'collaborative_rb', 'social_rb', 'interactive_robot'],
    text: '如果你最在意“机器人怎样进入人的世界”，更想长期做哪类研究？',
    opts: [
      { t: '让机器人帮助老人、病人或行动不便者完成高价值任务', d: { assistive_rb: 3, hri: 1, robotics: 1 } },
      { t: '让机器人在工位、产线或同一空间里和人安全协作', d: { collaborative_rb: 3, hri: 1, robotics: 1 } },
      { t: '让机器人在和人打交道时更会接反馈、拿捏分寸和读懂情境', d: { social_rb: 3, hri: 1, embodied: 1 } },
      { t: '把交互、任务、硬件和系统能力一起做成完整产品', d: { interactive_robot: 3, hri: 1, robotics: 1 } }
    ]
  },
  {
    id: 's3_rb_06',
    phase: 'deep',
    cat: 'Robotics 深挖 / 真实部署',
    triggerDirs: ['field_robotics', 'localization_mapping', 'intelligent_mobility', 'visual_navigation'],
    text: '如果你更想把机器人放进真实现场，最想长期解决哪类难题？',
    opts: [
      { t: '野外、工地、海上这类非结构化环境总是和实验室差太多', d: { field_robotics: 3, marine_robotics: 1, robotics: 1 } },
      { t: '地图、定位和导航在长时间运行里慢慢漂掉的问题', d: { localization_mapping: 3, visual_navigation: 1, sensor_fusion_rb: 1 } },
      { t: '移动平台要在连续交通环境里稳定判断和决策的问题', d: { intelligent_mobility: 3, perception: 1, visual_navigation: 1 } },
      { t: '路线、可通行区域和环境理解在真实移动中总会掉链子的问题', d: { visual_navigation: 3, localization_mapping: 1, field_robotics: 1 } }
    ]
  },
  {
    id: 's3_rb_07',
    phase: 'deep',
    cat: 'Robotics 深挖 / 长期标签',
    triggerDirs: ['sensor_fusion_rb', 'robot_kinematics', 'robot_learning', 'interactive_robot'],
    text: '几年后你更希望别人把你看作哪类机器人研究者/工程师？',
    opts: [
      { t: '特别会把多种传感器信息融合成可靠世界模型的那类人', d: { sensor_fusion_rb: 3, localization_mapping: 1, spatial_understanding: 1 } },
      { t: '特别会把运动学和动作约束梳顺、让系统动得准的那类人', d: { robot_kinematics: 3, motion: 1, robot_dynamics: 1 } },
      { t: '特别会让机器人靠数据和学习长出新技能的那类人', d: { robot_learning: 3, embodied: 1, vla: 1 } },
      { t: '特别会把机器人产品体验、任务和交互一起做顺的那类人', d: { interactive_robot: 3, collaborative_rb: 1, assistive_rb: 1 } }
    ]
  },
  {
    id: 's3_rb_08',
    phase: 'deep',
    cat: 'Robotics 深挖 / 真机难点',
    triggerDirs: ['visual_navigation', 'robot_dynamics', 'intelligent_mobility', 'field_robotics'],
    text: '如果你长期待在真机现场，最想攻克哪类反复出现的难点？',
    opts: [
      { t: '一换环境就找不准路，系统突然不知道该往哪走', d: { visual_navigation: 3, localization_mapping: 1, field_robotics: 1 } },
      { t: '计划在仿真里能走，真机一跑就因为动态影响而变形', d: { robot_dynamics: 3, motion: 1, mpc: 1 } },
      { t: '移动平台在连续交通环境里一长跑就判断失误', d: { intelligent_mobility: 3, perception: 1, visual_navigation: 1 } },
      { t: '系统能跑但到了野外、工地或复杂现场就问题不断', d: { field_robotics: 3, marine_robotics: 1, robotics: 1 } }
    ]
  },
  {
    id: 's3_rb_09',
    phase: 'deep',
    cat: 'Robotics 深挖 / 数据来源',
    triggerDirs: ['embodied', 'slam', 'perception', 'hri'],
    text: '如果你要长期依赖一类“学习素材”推进机器人能力，你最想用哪种？',
    opts: [
      { t: '真实传感器和真机日志，从现场里学最关键的模式', d: { slam: 2, perception: 2, robotics: 1 } },
      { t: '大量交互或试错数据，让机器人靠经验长技能', d: { embodied: 3, robot_learning: 1, field_robotics: 1 } },
      { t: '人类示范、语言指令和任务反馈，让机器人更懂人', d: { hri: 2, vla: 2, embodied: 1 } },
      { t: '多视角、多模态感知数据，让系统把环境看得更完整', d: { perception: 3, embodied: 1, slam: 1 } }
    ]
  },
  {
    id: 's3_rb_10',
    phase: 'deep',
    cat: 'Robotics 深挖 / 成熟形态',
    triggerDirs: ['intelligent_mobility', 'hri', 'embodied', 'interactive_robot'],
    text: '如果多年后这条线成熟了，你最希望自己推进出来的是哪种机器人能力？',
    opts: [
      { t: '能在复杂环境里自主完成更长链路任务', d: { intelligent_mobility: 2, field_robotics: 1, perception: 1 } },
      { t: '能和人自然、安全、可信地协作', d: { hri: 3, interactive_robot: 1, collaborative_rb: 1 } },
      { t: '能通过学习快速适应新任务和新场景', d: { embodied: 3, vla: 2, robotics: 1 } },
      { t: '能作为稳定产品长期部署，而不是只停在 demo', d: { interactive_robot: 2, robotics: 1, collaborative_rb: 1 } }
    ]
  },
  {
    id: 's3_rb_11',
    phase: 'deep',
    cat: 'Robotics 深挖 / 进入人的世界',
    triggerDirs: ['assistive_rb', 'collaborative_rb', 'social_rb', 'interactive_robot'],
    text: '如果你更想研究“机器人怎样真正进入人的日常世界”，最想长期做哪类方向？',
    opts: [
      { t: '让机器人帮助老人、病人或行动不便者完成高价值任务', d: { assistive_rb: 3, hri: 1, robotics: 1 } },
      { t: '让机器人在工位、产线或同一空间里和人安全协作', d: { collaborative_rb: 3, hri: 1, robotics: 1 } },
      { t: '让机器人在和人打交道时更会接反馈、拿捏分寸和读懂情境', d: { social_rb: 3, hri: 1, embodied: 1 } },
      { t: '把交互、任务流程和系统能力做成完整的机器人产品体验', d: { interactive_robot: 3, hri: 1, robotics: 1 } }
    ]
  },
  {
    id: 's3_rb_12',
    phase: 'deep',
    cat: 'Robotics 深挖 / 自主系统场景',
    triggerDirs: ['drones', 'multi_robot', 'field_robotics', 'intelligent_mobility'],
    text: '如果你更想把机器人放到复杂真实环境里，最想长期做哪类自主系统？',
    opts: [
      { t: '无人机和空中平台，强调轻量、快速反应和任务执行', d: { drones: 3, visual_navigation: 1, perception: 1 } },
      { t: '多机器人协同，让很多个体一起分工、通信和合作', d: { multi_robot: 3, collaborative_rb: 1, embodied: 1 } },
      { t: '野外、海上或非结构化现场，让系统在艰难环境里稳定工作', d: { field_robotics: 2, marine_robotics: 2, robotics: 1 } },
      { t: '车、路、移动平台这类连续运行的智能交通自主系统', d: { intelligent_mobility: 3, visual_navigation: 1, perception: 1 } }
    ]
  },
  {
    id: 's3_rb_13',
    phase: 'deep',
    cat: 'Robotics 深挖 / 机器人大脑',
    triggerDirs: ['intelligent_mobility', 'perception', 'motion', 'mpc'],
    text: '如果你更想做“机器人 / 车的大脑”，最想一直啃哪一层？',
    opts: [
      { t: '让系统更会理解环境、判断局势，再决定下一步动作', d: { intelligent_mobility: 3, perception: 1, robot_learning: 1 } },
      { t: '让系统从传感器输入里把周围世界和关键目标看准看全', d: { perception: 3, intelligent_mobility: 1, slam: 1 } },
      { t: '让规划和动作链条既可执行又贴合真实任务约束', d: { motion: 3, intelligent_mobility: 1, robot_kinematics: 1 } },
      { t: '让反馈调节和控制策略在高速变化里还压得住场面', d: { mpc: 3, motion: 1, control: 1 } }
    ]
  },
  {
    id: 's3_rb_branch_01',
    phase: 'deep',
    cat: 'Robotics 深挖 / 必问分叉',
    mustBranch: true,
    branchOrder: 1,
    text: '如果以后一直围着机器人系统转，你更想把哪类能力慢慢坐成主线？',
    opts: [
      { t: '感知、定位和建图，重点是机器人先知道自己在哪、周围是什么', d: { localization_mapping: 2, sensor_fusion_rb: 2, visual_navigation: 2, spatial_understanding: 1 } },
      { t: '规划、运动和控制，重点是机器人下一步怎么动才对', d: { motion: 2, mpc: 2, robot_kinematics: 2, robot_dynamics: 1 } },
      { t: '学习、具身和机器人智能，重点是机器人怎样自己长出技能', d: { robot_learning: 2, embodied: 2, vla: 2, perception: 1 } },
      { t: '人机交互和服务协作，重点是机器人怎样进入人的日常世界', d: { hri: 2, interactive_robot: 2, assistive_rb: 1, collaborative_rb: 1, social_rb: 1 } },
      { t: '自主系统落地，重点是车、无人机和复杂现场怎样长期稳定运行', d: { intelligent_mobility: 2, drones: 1, field_robotics: 1, multi_robot: 1, marine_robotics: 1 } }
    ]
  }
];
