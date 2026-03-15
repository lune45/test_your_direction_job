window.STAGE1_QS = [
  {
    id: 's1_01',
    phase: 'anchor',
    cat: '粗分流',
    text: '哪种长期成果最能让你觉得这几年没白过？',
    opts: [
      { t: '提出一个别人会持续引用的解释框架', d: { ml_theory: 2, stat_learn: 2, theory: 1, stats: 1 } },
      { t: '把一套复杂系统做得稳定、可靠、可扩展', d: { dist_sys: 2, cloud: 2, sys_ai: 1, emb_sw: 1 } },
      { t: '从混乱数据里判断真正发生了什么', d: { ds_sci: 2, causal: 2, bayes: 1, or_ops: 1 } },
      { t: '让机器或车辆在真实环境里自己判断并完成任务', d: { robotics: 2, autonomous: 2, perception: 1, embodied: 1 } },
      { t: '把传感器、设备和底层算力链路做到更快更稳', d: { ai_hw: 2, vlsi: 2, signal: 1, embedded: 1 } }
    ]
  },
  {
    id: 's1_02',
    phase: 'anchor',
    cat: '粗分流',
    text: '遇到一个复杂问题时，你最自然的第一反应是什么？',
    opts: [
      { t: '先抽象出规则和假设，搞清楚它为什么成立', d: { ml_theory: 2, theory: 2, stats: 1, conv_opt: 1 } },
      { t: '先看系统瓶颈在哪，能不能拆开重构', d: { systems: 2, dist_sys: 2, hw_sw: 1, mlops: 1 } },
      { t: '先把数据、观测和影响因素理干净', d: { ds_sci: 2, stats: 2, domain_ds: 1, causal: 1 } },
      { t: '先看感知、动作、反馈闭环哪里出错', d: { robotics: 2, control: 2, motion: 1, autonomous: 1 } },
      { t: '先看信号链路、硬件资源或计算路径是否合理', d: { signal: 2, elec_sys: 2, arch: 1, ai_hw: 1 } }
    ]
  },
  {
    id: 's1_03',
    phase: 'anchor',
    cat: '粗分流',
    text: '下面哪种“难”最可能让你愿意长期啃下去？',
    opts: [
      { t: '别人都能跑通，但没人能讲清为什么有效', d: { ml_theory: 2, stat_learn: 2, bayes: 1, theory: 1 } },
      { t: '规模一上来就慢、贵、容易挂', d: { dist_sys: 2, cloud: 2, sys_ai: 1, db: 1 } },
      { t: '数据很多，但结论总像隔着一层雾', d: { ds_sci: 2, causal: 2, econom: 1, uq: 1 } },
      { t: '环境在变、传感器有噪声、动作还得及时', d: { robotics: 2, perception: 2, control: 1, autonomous: 1 } },
      { t: '资源很紧，但还得又快又省又稳定', d: { embedded: 2, ai_hw: 2, arch: 1, comm: 1 } }
    ]
  },
  {
    id: 's1_04',
    phase: 'anchor',
    cat: '粗分流',
    text: '哪种工作日常最像你会自愿反复打磨的样子？',
    opts: [
      { t: '读论文、做推导、验证边界和反例', d: { ml_theory: 2, repr: 1, theory: 2, conv_opt: 1 } },
      { t: '看监控、做 profiling、调结构和容量', d: { systems: 2, dist_sys: 2, mlops: 1, arch: 1 } },
      { t: '做统计检验、解释结果、判断影响是否真实', d: { stats: 2, causal: 2, domain_ds: 1, or_ops: 1 } },
      { t: '上真机或仿真环境不断试、不断修', d: { robotics: 2, motion: 1, mpc: 1, autonomous: 2 } },
      { t: '盯波形、信号、时序、功耗或带宽', d: { signal: 2, vlsi: 2, elec_sys: 1, mem_sys: 1 } }
    ]
  },
  {
    id: 's1_05',
    phase: 'anchor',
    cat: '粗分流',
    text: '如果做一个长期项目，你最想守住哪种价值？',
    opts: [
      { t: '解释得通，边界清楚，经得起推敲', d: { ml_theory: 2, theory: 2, stats: 1, formal: 1 } },
      { t: '稳定在线，别人敢长期依赖', d: { dist_sys: 2, cloud: 2, embedded: 1, mlops: 1 } },
      { t: '结论可信，能支撑真正的判断', d: { causal: 2, ds_sci: 2, econom: 1, stats: 1 } },
      { t: '机器真的能安全地看、想、动', d: { robotics: 2, control: 1, perception: 2, hri: 1 } },
      { t: '底层能力强，性能和资源利用率漂亮', d: { arch: 2, ai_hw: 2, vlsi: 1, signal: 1 } }
    ]
  },
  {
    id: 's1_06',
    phase: 'anchor',
    cat: '粗分流',
    text: '你更享受哪种“把事情做成”的感觉？',
    opts: [
      { t: '把一个模糊问题讲成一个清晰的理论问题', d: { ml_theory: 2, theory: 2, bayes: 1, game_th: 1 } },
      { t: '把一套复杂流程整理成可复用的系统', d: { systems: 2, db: 1, dist_sys: 2, ds_eng: 1 } },
      { t: '把一堆数据变成可靠的判断和建议', d: { ds_sci: 2, causal: 1, stats: 2, domain_ds: 1 } },
      { t: '让机器人或车辆在复杂环境里更会看、更会判断', d: { robotics: 2, autonomous: 2, perception: 1, motion: 1 } },
      { t: '让芯片、链路或设备能力明显上一个台阶', d: { ce: 0, ai_hw: 2, npu: 1, comm: 2, vlsi: 1 } }
    ]
  },
  {
    id: 's1_07',
    phase: 'anchor',
    cat: '粗分流',
    text: '如果你要长期和一类材料打交道，你更希望它是什么？',
    opts: [
      { t: '模型、表示、证明或算法边界', d: { repr: 2, ml_theory: 1, theory: 2, comb_opt: 1 } },
      { t: '服务、接口、流量、状态和故障', d: { dist_sys: 2, cloud: 2, networks: 1, stream: 1 } },
      { t: '日志、样本、实验结果和业务指标', d: { ds_sci: 2, mlops: 1, causal: 2, vis: 1 } },
      { t: '传感器、地图、动作反馈和环境变化', d: { perception: 2, slam: 1, robotics: 2, autonomous: 1 } },
      { t: '波形、电路、存储层级和算力资源', d: { signal: 2, elec_sys: 1, arch: 2, mem_sys: 1 } }
    ]
  },
  {
    id: 's1_08',
    phase: 'anchor',
    cat: '粗分流',
    text: '哪种团队讨论最可能让你越聊越兴奋？',
    opts: [
      { t: '为什么这个结论成立、还有没有更一般的情况', d: { ml_theory: 2, stat_learn: 1, theory: 2, dynamic_prog: 1 } },
      { t: '这套系统怎样做得更稳、更省、更能扩', d: { systems: 2, cloud: 2, ce: 0, arch: 1, ml_sys: 0 } },
      { t: '这个结果到底是不是因果，不是巧合吧', d: { causal: 2, econom: 2, ds_sci: 1, stats: 1 } },
      { t: '机器怎样在现实里更好地感知、决策和行动', d: { robotics: 2, embodied: 1, autonomous: 2, perception: 1 } },
      { t: '底层链路和算力组织怎么改才更接近极限性能', d: { ai_hw: 2, vlsi: 1, arch: 2, comm: 1 } }
    ]
  },
  {
    id: 's1_09',
    phase: 'anchor',
    cat: '粗分流',
    text: '哪种失败最值得你花很多时间去复盘？',
    opts: [
      { t: '方法在新场景里突然失效，原理解释不够', d: { repr: 2, transfer: 1, ml_theory: 2, uq: 1 } },
      { t: '系统高峰期抖了，明明本地测试都正常', d: { dist_sys: 2, cloud: 2, stream: 1, mlops: 1 } },
      { t: '结论看起来对，但后面发现判断方向错了', d: { causal: 2, econom: 1, stats: 2, bayes: 1 } },
      { t: '仿真里没问题，真机一上就不工作', d: { robotics: 2, embodied: 1, control: 2, embedded: 1 } },
      { t: '性能没达到目标，瓶颈却很难定位', d: { arch: 2, ai_hw: 2, vlsi: 1, signal: 1 } }
    ]
  },
  {
    id: 's1_10',
    phase: 'anchor',
    cat: '粗分流',
    text: '如果只能保留一种能力作为你的长期底层优势，你更想要哪一种？',
    opts: [
      { t: '把问题抽象、形式化并说清楚', d: { ml_theory: 2, theory: 2, formal: 1, stats: 1 } },
      { t: '把复杂系统搭起来并守住稳定性', d: { systems: 2, dist_sys: 2, emb_sw: 1, cloud: 1 } },
      { t: '把数据变成可信判断和可执行决策', d: { ds_sci: 2, causal: 1, stats: 2, or_ops: 1 } },
      { t: '把感知、动作和反馈闭环做顺', d: { robotics: 2, motion: 1, control: 2, perception: 1 } },
      { t: '把底层性能、资源和硬件能力压到极致', d: { arch: 2, ai_hw: 2, vlsi: 1, comm: 1 } }
    ]
  },
  {
    id: 's1_11',
    phase: 'anchor',
    cat: '粗分流',
    text: '你更容易对哪种问题产生“我非要把它搞明白”的冲动？',
    opts: [
      { t: '为什么模型或方法在某些条件下会突然失灵', d: { ml_theory: 2, scaling: 1, bayes: 1, theory: 2 } },
      { t: '为什么一套服务会在规模上来后突然不稳', d: { dist_sys: 2, cloud: 1, db: 1, systems: 2 } },
      { t: '为什么数据支持的结论和真实结果对不上', d: { causal: 2, econom: 2, ds_sci: 1, stats: 1 } },
      { t: '为什么机器人在真实场景里总会出意外', d: { robotics: 2, autonomous: 1, perception: 1, control: 2 } },
      { t: '为什么性能总卡在某个资源墙上', d: { arch: 2, mem_sys: 1, ai_hw: 2, vlsi: 1 } }
    ]
  },
  {
    id: 's1_12',
    phase: 'anchor',
    cat: '粗分流',
    text: '下面哪种“输入”你最愿意天天处理？',
    opts: [
      { t: '数学假设、模型结构和泛化边界', d: { ml_theory: 2, stat_learn: 2, theory: 1, conv_opt: 1 } },
      { t: '服务调用、请求流、状态变化和监控面板', d: { systems: 2, cloud: 2, mlops: 1, stream: 1 } },
      { t: '样本、实验设计、用户行为和统计结果', d: { ds_sci: 2, stats: 1, causal: 2, domain_ds: 1 } },
      { t: '图像、传感器、轨迹和动作反馈', d: { robotics: 2, perception: 2, autonomous: 1, signal: 1 } },
      { t: '波形、时序、功耗、带宽和硬件约束', d: { signal: 2, vlsi: 1, ai_hw: 2, embedded: 1 } }
    ]
  },
  {
    id: 's1_13',
    phase: 'anchor',
    cat: '粗分流',
    text: '如果你要花几个月做一个项目，最想看到哪种过程？',
    opts: [
      { t: '先提假设，再不断验证和修正', d: { ml_theory: 2, repr: 1, stats: 1, theory: 2 } },
      { t: '先搭骨架，再把稳定性和扩展性补齐', d: { systems: 2, dist_sys: 2, emb_sw: 1, db: 1 } },
      { t: '先找指标和数据，再判断怎样才算真的有效', d: { causal: 2, ds_sci: 2, econom: 1, or_ops: 1 } },
      { t: '先做闭环，再在真实环境里一轮轮修', d: { robotics: 2, autonomous: 1, motion: 1, control: 2 } },
      { t: '先定资源和约束，再把实现压到最好', d: { arch: 2, ai_hw: 2, vlsi: 1, comm: 1 } }
    ]
  },
  {
    id: 's1_14',
    phase: 'anchor',
    cat: '粗分流',
    text: '哪种问题最像“世界值得被重新组织一遍”？',
    opts: [
      { t: '让机器学到更可迁移、更一般的表示', d: { repr: 2, ssl: 1, ml_theory: 1, transfer: 2 } },
      { t: '让复杂系统的结构更清晰、更可治理', d: { systems: 2, db: 1, dist_sys: 2, cloud: 1 } },
      { t: '让现实世界的不确定性变成可判断的证据', d: { stats: 2, causal: 2, bayes: 1, uq: 1 } },
      { t: '让机器真正理解环境并和环境互动', d: { robotics: 2, embodied: 1, perception: 1, autonomous: 2 } },
      { t: '让计算资源和硬件组织更贴近任务本身', d: { hw_sw: 2, arch: 2, ai_hw: 1, logic_des: 1 } }
    ]
  },
  {
    id: 's1_15',
    phase: 'anchor',
    cat: '粗分流',
    text: '哪种“说服别人”的方式最像你？',
    opts: [
      { t: '靠理论解释、边界条件和推理链', d: { ml_theory: 2, theory: 2, formal: 1, stats: 1 } },
      { t: '靠真实运行结果、稳定性和性能数字', d: { systems: 2, dist_sys: 2, arch: 1, mlops: 1 } },
      { t: '靠实验设计、统计证据和反事实判断', d: { causal: 2, econom: 2, stats: 1, ds_sci: 1 } },
      { t: '靠真机演示、闭环效果和任务完成率', d: { robotics: 2, autonomous: 1, motion: 1, perception: 2 } },
      { t: '靠芯片/设备指标、时序和功耗曲线', d: { ai_hw: 2, vlsi: 2, signal: 1, comm: 1 } }
    ]
  },
  {
    id: 's1_16',
    phase: 'anchor',
    cat: '粗分流',
    text: '你更想在哪种约束下做事？',
    opts: [
      { t: '问题抽象很难，但一旦讲通就很漂亮', d: { ml_theory: 2, theory: 2, conv_opt: 1, bayes: 1 } },
      { t: '并发多、故障多、链路长，不能掉', d: { dist_sys: 2, systems: 2, cloud: 1, networks: 1 } },
      { t: '数据有偏、样本有限、结论必须谨慎', d: { stats: 2, causal: 2, econom: 1, domain_ds: 1 } },
      { t: '环境动态变化，必须及时感知和反馈', d: { robotics: 2, control: 1, perception: 2, autonomous: 1 } },
      { t: '功耗、面积、带宽、延迟都得一起算', d: { arch: 2, ai_hw: 2, vlsi: 1, embedded: 1 } }
    ]
  },
  {
    id: 's1_17',
    phase: 'anchor',
    cat: '粗分流',
    text: '如果周围人来找你帮忙，你更希望他们是为什么来？',
    opts: [
      { t: '因为你总能把一个问题讲透', d: { ml_theory: 2, theory: 2, stats: 1, pl: 1 } },
      { t: '因为你总能把复杂流程理顺并跑稳', d: { systems: 2, dist_sys: 2, ds_eng: 1, emb_sw: 1 } },
      { t: '因为你总能把数据和判断说得更可信', d: { ds_sci: 2, stats: 2, causal: 1, domain_ds: 1 } },
      { t: '因为你总能让机器人或车辆在现实里真正做对事', d: { robotics: 2, autonomous: 2, motion: 1, control: 1 } },
      { t: '因为你总能把底层性能问题挖出来', d: { ai_hw: 2, arch: 2, mem_sys: 1, signal: 1 } }
    ]
  },
  {
    id: 's1_18',
    phase: 'anchor',
    cat: '粗分流',
    text: '哪种场景更容易让你产生长期职业画面？',
    opts: [
      { t: '在一个理论或方法问题上持续积累多年', d: { ml_theory: 2, stat_learn: 1, theory: 2, comb_opt: 1 } },
      { t: '支撑很多团队的关键系统长期平稳运行', d: { dist_sys: 2, cloud: 2, db: 1, mlops: 1 } },
      { t: '为组织的重要判断提供证据和依据', d: { ds_sci: 2, causal: 2, econom: 1, or_ops: 1 } },
      { t: '让机器在真实现场越来越可靠', d: { robotics: 2, autonomous: 1, hri: 1, perception: 2 } },
      { t: '做出别人离不开的底层设备或算力能力', d: { ai_hw: 2, vlsi: 1, arch: 2, comm: 1 } }
    ]
  },
  {
    id: 's1_19',
    phase: 'anchor',
    cat: '粗分流',
    text: '你更愿意被哪种指标评价？',
    opts: [
      { t: '解释力、普适性和理论完整度', d: { ml_theory: 2, theory: 2, bayes: 1, formal: 1 } },
      { t: '可用性、吞吐、延迟和故障恢复', d: { dist_sys: 2, systems: 2, cloud: 1, stream: 1 } },
      { t: '结论是否稳、决策是否更准', d: { stats: 2, causal: 2, ds_sci: 1, uq: 1 } },
      { t: '真实任务完成率和环境适应性', d: { robotics: 2, autonomous: 2, motion: 1, embodied: 1 } },
      { t: '功耗、面积、速度和资源利用率', d: { ai_hw: 2, arch: 2, vlsi: 1, mem_sys: 1 } }
    ]
  },
  {
    id: 's1_20',
    phase: 'anchor',
    cat: '粗分流',
    text: '哪种“学习新东西”的路径最吸引你？',
    opts: [
      { t: '先理解原理，再接受实现细节', d: { ml_theory: 2, theory: 2, stats: 1, pl: 1 } },
      { t: '先搭起来跑，再一点点打磨架构', d: { systems: 2, dist_sys: 2, emb_sw: 1, ds_eng: 1 } },
      { t: '先看数据和现象，再形成判断框架', d: { ds_sci: 2, stats: 2, causal: 1, vis: 1 } },
      { t: '先让系统有感知和动作，再追求更聪明', d: { robotics: 2, control: 1, perception: 2, embodied: 1 } },
      { t: '先摸清资源边界，再做结构上的优化', d: { arch: 2, ai_hw: 2, embedded: 1, signal: 1 } }
    ]
  },
  {
    id: 's1_21',
    phase: 'anchor',
    cat: '粗分流',
    text: '如果你要做一个作品集，你最想放进去哪类项目？',
    opts: [
      { t: '一个解释问题本质的框架或方法实验', d: { ml_theory: 2, repr: 1, theory: 2, stats: 1 } },
      { t: '一个能扛住真实使用场景的系统或平台', d: { systems: 2, dist_sys: 2, cloud: 1, db: 1 } },
      { t: '一个用数据支撑真实决策的分析或实验', d: { ds_sci: 2, causal: 2, domain_ds: 1, econom: 1 } },
      { t: '一个能在现实环境里稳定工作的智能体/设备', d: { robotics: 2, autonomous: 1, perception: 1, control: 2 } },
      { t: '一个在资源受限下依然表现很强的底层实现', d: { ai_hw: 2, embedded: 1, arch: 2, vlsi: 1 } }
    ]
  },
  {
    id: 's1_22',
    phase: 'anchor',
    cat: '粗分流',
    text: '哪种“问题空间”最容易让你想一直往里走？',
    opts: [
      { t: '方法、规律和边界', d: { ml_theory: 2, stat_learn: 2, theory: 1, game_th: 1 } },
      { t: '架构、组件和协作链路', d: { systems: 2, dist_sys: 2, hw_sw: 1, cloud: 1 } },
      { t: '样本、变量和因果关系', d: { stats: 2, causal: 2, econom: 1, domain_ds: 1 } },
      { t: '空间、传感、动作和反馈', d: { robotics: 2, slam: 1, motion: 1, control: 2 } },
      { t: '电、算、存和通信约束', d: { signal: 2, comm: 1, arch: 2, ai_hw: 1 } }
    ]
  },
  {
    id: 's1_23',
    phase: 'anchor',
    cat: '粗分流',
    text: '哪种“责任”更像你愿意长期背的？',
    opts: [
      { t: '为一个解释或结论的严谨性负责', d: { ml_theory: 2, theory: 2, stats: 1, formal: 1 } },
      { t: '为系统稳定和团队使用体验负责', d: { systems: 2, dist_sys: 2, mlops: 1, emb_sw: 1 } },
      { t: '为数据判断和业务决策的可信度负责', d: { ds_sci: 2, causal: 2, econom: 1, or_ops: 1 } },
      { t: '为机器在真实世界中的安全表现负责', d: { robotics: 2, autonomous: 1, hri: 1, control: 2 } },
      { t: '为性能、功耗和底层实现质量负责', d: { ai_hw: 2, arch: 2, vlsi: 1, embedded: 1 } }
    ]
  },
  {
    id: 's1_24',
    phase: 'anchor',
    cat: '粗分流',
    text: '哪种长期成长曲线最像你想要的？',
    opts: [
      { t: '问题越来越深，解释越来越强', d: { ml_theory: 2, theory: 2, stats: 1, bayes: 1 } },
      { t: '系统越来越大，但你越来越能掌控它', d: { systems: 2, dist_sys: 2, cloud: 1, db: 1 } },
      { t: '数据越来越复杂，但你越来越能做出稳判断', d: { ds_sci: 2, causal: 2, domain_ds: 1, uq: 1 } },
      { t: '场景越来越真实，但机器越来越能独立完成任务', d: { robotics: 2, embodied: 1, autonomous: 2, perception: 1 } },
      { t: '约束越来越苛刻，但实现越来越接近极限', d: { ai_hw: 2, arch: 2, vlsi: 1, comm: 1 } }
    ]
  },
  {
    id: 's1_25',
    phase: 'anchor',
    cat: '粗分流',
    text: '你更愿意把哪种“复杂性”慢慢吃下来？',
    opts: [
      { t: '概念和规律本身很抽象，但一旦想通就很稳', d: { ml_theory: 2, theory: 2, stats: 1, formal: 1 } },
      { t: '系统组件很多，必须一层层拆开才不会失控', d: { systems: 2, dist_sys: 2, cloud: 1, hw_sw: 1 } },
      { t: '影响因素太多，必须一点点辨清谁真正起作用', d: { causal: 2, ds_sci: 2, econom: 1, bayes: 1 } },
      { t: '环境和反馈总在变化，必须边看边调边修', d: { robotics: 2, control: 2, autonomous: 1, perception: 1 } },
      { t: '资源和物理约束都很硬，设计空间却很大', d: { arch: 2, ai_hw: 2, vlsi: 1, signal: 1 } }
    ]
  },
  {
    id: 's1_26',
    phase: 'anchor',
    cat: '粗分流',
    text: '哪种“长期战线”最像你愿意持续投入的？',
    opts: [
      { t: '把一个问题越讲越清楚，直到形成稳定框架', d: { ml_theory: 2, theory: 2, repr: 1, bayes: 1 } },
      { t: '把一套平台越做越稳，直到大家默认它可靠', d: { systems: 2, dist_sys: 2, db: 1, mlops: 1 } },
      { t: '把判断越做越准，直到别人愿意拿它做决策', d: { ds_sci: 2, stats: 2, causal: 1, domain_ds: 1 } },
      { t: '把机器越做越能适应真实环境，直到真正可用', d: { robotics: 2, embodied: 1, autonomous: 2, control: 1 } },
      { t: '把底层实现越磨越强，直到接近性能和功耗极限', d: { ai_hw: 2, arch: 2, embedded: 1, mem_sys: 1 } }
    ]
  },
  {
    id: 's1_27',
    phase: 'anchor',
    cat: '粗分流',
    text: '如果你要加入一个讨论组，哪类话题最可能让你主动多说？',
    opts: [
      { t: '这个问题背后的共性结构到底是什么', d: { theory: 2, ml_theory: 2, game_th: 1, stat_learn: 1 } },
      { t: '这套架构为什么会在某个规模点开始撑不住', d: { systems: 2, dist_sys: 2, cloud: 1, networks: 1 } },
      { t: '这个结论是不是被样本、口径或设计误导了', d: { stats: 2, causal: 2, data_qual: 1, econom: 1 } },
      { t: '为什么一到真实环境里，系统行为就变了', d: { robotics: 2, autonomous: 1, perception: 2, control: 1 } },
      { t: '瓶颈到底是算力、带宽、功耗还是时序', d: { arch: 2, ai_hw: 2, comm: 1, vlsi: 1 } }
    ]
  },
  {
    id: 's1_28',
    phase: 'anchor',
    cat: '粗分流',
    text: '你更想在哪种“证据”面前点头？',
    opts: [
      { t: '它在逻辑上讲得通，而且边界清楚', d: { ml_theory: 2, theory: 2, formal: 1, stats: 1 } },
      { t: '它在线上或大规模环境里真的跑稳了', d: { systems: 2, dist_sys: 2, cloud: 1, emb_sw: 1 } },
      { t: '它在不同样本和实验设计下都指向同一个结论', d: { stats: 2, causal: 2, bayes: 1, ds_sci: 1 } },
      { t: '它在真机、真路况或真实现场里也能自己做对判断', d: { robotics: 2, autonomous: 2, perception: 1, hri: 1 } },
      { t: '它在严苛资源限制下还能保持高性能', d: { ai_hw: 2, arch: 2, embedded: 1, signal: 1 } }
    ]
  },
  {
    id: 's1_29',
    phase: 'anchor',
    cat: '粗分流',
    text: '面对同一个问题，你最愿意优先投入哪种资源？',
    opts: [
      { t: '时间，用来把原理和结构想透', d: { ml_theory: 2, theory: 2, conv_opt: 1, stats: 1 } },
      { t: '工程精力，用来把组件和流程搭稳', d: { systems: 2, dist_sys: 2, db: 1, ds_eng: 1 } },
      { t: '数据和实验，用来把判断做得更可信', d: { ds_sci: 2, causal: 2, stats: 1, vis: 1 } },
      { t: '真机或仿真迭代，用来让系统逐渐闭环', d: { robotics: 2, autonomous: 1, motion: 1, control: 2 } },
      { t: '底层资源调优，用来把每一分性能都榨出来', d: { arch: 2, ai_hw: 2, mem_sys: 1, vlsi: 1 } }
    ]
  },
  {
    id: 's1_30',
    phase: 'anchor',
    cat: '粗分流',
    text: '你更想长期训练哪种“判断力”？',
    opts: [
      { t: '一眼看出一个方法背后的关键假设', d: { ml_theory: 2, theory: 2, bayes: 1, formal: 1 } },
      { t: '一眼看出一套系统最危险的薄弱环节', d: { systems: 2, dist_sys: 2, security: 1, cloud: 1 } },
      { t: '一眼看出一个结论可能被什么因素误导', d: { causal: 2, stats: 2, econom: 1, uq: 1 } },
      { t: '一眼看出真实环境里哪个环节最可能失手', d: { robotics: 2, perception: 1, control: 2, autonomous: 1 } },
      { t: '一眼看出哪层资源和结构最值得先动', d: { arch: 2, ai_hw: 2, hw_sw: 1, signal: 1 } }
    ]
  },
  {
    id: 's1_31',
    phase: 'anchor',
    cat: '粗分流',
    text: '如果一个项目成功了，你最希望别人怎么描述你的贡献？',
    opts: [
      { t: '把一个原本模糊的问题讲成了清楚的问题', d: { ml_theory: 2, theory: 2, repr: 1, stats: 1 } },
      { t: '把一套原本脆弱的系统做成了公共底座', d: { systems: 2, dist_sys: 2, cloud: 1, db: 1 } },
      { t: '把原本靠感觉做的决定变成了有证据的判断', d: { ds_sci: 2, causal: 2, econom: 1, domain_ds: 1 } },
      { t: '把机器从“能 demo”做到了“真能独立干活”', d: { robotics: 2, autonomous: 2, embodied: 1, perception: 1 } },
      { t: '把底层能力做到了别人做不到的效率级别', d: { ai_hw: 2, arch: 2, npu: 1, vlsi: 1 } }
    ]
  },
  {
    id: 's1_32',
    phase: 'anchor',
    cat: '粗分流',
    text: '哪种“长期好奇心”最像你会一直带着走的？',
    opts: [
      { t: '复杂现象背后是不是有更一般的规律', d: { ml_theory: 2, theory: 2, stat_learn: 1, game_th: 1 } },
      { t: '复杂系统怎样才能越来越可靠而不是越来越乱', d: { systems: 2, dist_sys: 2, cloud: 1, hw_sw: 1 } },
      { t: '复杂现实怎样才能被更稳地测量和判断', d: { stats: 2, causal: 2, bayes: 1, domain_ds: 1 } },
      { t: '复杂环境怎样才能被机器真正理解和应对', d: { robotics: 2, autonomous: 2, perception: 1, embodied: 1 } },
      { t: '复杂计算怎样从底层被重新组织得更高效', d: { arch: 2, ai_hw: 2, mem_sys: 1, comm: 1 } }
    ]
  },
  {
    id: 's1_33',
    phase: 'anchor',
    cat: '粗分流',
    text: '如果项目是“让一台车或机器人真正上路/上场”，你最想负责哪一层？',
    opts: [
      { t: '把背后的方法和规律想透，知道它为什么会有效', d: { ml_theory: 2, theory: 2, stats: 1, formal: 1 } },
      { t: '把整套系统和服务链路搭稳，让它长期可靠运行', d: { systems: 2, dist_sys: 2, cloud: 1, mlops: 1 } },
      { t: '把日志、实验和观测变成能指导决策的证据', d: { ds_sci: 2, causal: 2, stats: 1, domain_ds: 1 } },
      { t: '把“看见什么、怎么判断、下一步怎么做”这条脑子做对', d: { robotics: 2, autonomous: 2, perception: 1, motion: 1 } },
      { t: '把传感器、控制器、通信和算力底座撑稳', d: { embedded: 2, signal: 1, ai_hw: 2, control: 1 } }
    ]
  },
  {
    id: 's1_34',
    phase: 'anchor',
    cat: '粗分流',
    text: '同样是“东西要在物理世界里跑起来”，哪种难更像你愿意长期扛的？',
    opts: [
      { t: '抽象规律很难，但一旦想清楚就能解释很多现象', d: { ml_theory: 2, theory: 2, bayes: 1, stat_learn: 1 } },
      { t: '系统组件太多，必须长期治理才能不失控', d: { systems: 2, dist_sys: 2, cloud: 1, db: 1 } },
      { t: '数据很多，但你得判断到底哪件事真的重要', d: { ds_sci: 2, causal: 2, econom: 1, stats: 1 } },
      { t: '环境一变，系统就必须重新感知、判断和规划', d: { robotics: 2, autonomous: 2, perception: 1, embodied: 1 } },
      { t: '噪声、时延、功耗和资源限制总在逼你取舍', d: { signal: 2, control: 1, ai_hw: 2, embedded: 1 } }
    ]
  },
  {
    id: 's1_35',
    phase: 'anchor',
    cat: '粗分流',
    text: '如果你要把一段时间都押在“让系统更聪明或更强”上，你更想强化哪类能力？',
    opts: [
      { t: '把一个问题讲成可以反复复用的理论或方法', d: { ml_theory: 2, theory: 2, repr: 1, bayes: 1 } },
      { t: '把复杂系统拆清楚，让它越做越稳、越做越能扩', d: { systems: 2, dist_sys: 2, cloud: 1, hw_sw: 1 } },
      { t: '把数据、实验和判断做成可靠的决策依据', d: { ds_sci: 2, causal: 2, stats: 1, or_ops: 1 } },
      { t: '把机器的“脑子”做得更会理解场景、自己拿主意', d: { robotics: 2, autonomous: 2, embodied: 1, perception: 1 } },
      { t: '把底层设备、芯片和算力组织做得更快更省', d: { arch: 2, ai_hw: 2, vlsi: 1, mem_sys: 1 } }
    ]
  },
  {
    id: 's1_36',
    phase: 'anchor',
    cat: '粗分流',
    text: '哪种“看到成果”的瞬间最像你会真心兴奋的样子？',
    opts: [
      { t: '一个看起来混乱的问题终于被讲清楚了', d: { ml_theory: 2, theory: 2, formal: 1, stats: 1 } },
      { t: '一套复杂系统终于稳定到大家都敢依赖', d: { systems: 2, dist_sys: 2, cloud: 1, db: 1 } },
      { t: '一个原本靠感觉的判断终于有了扎实证据', d: { ds_sci: 2, causal: 2, stats: 1, domain_ds: 1 } },
      { t: '机器在复杂环境里自己做对了判断和动作', d: { robotics: 2, autonomous: 2, motion: 1, perception: 1 } },
      { t: '底层链路更顺了，设备和算力终于不再拖后腿', d: { embedded: 2, ai_hw: 2, signal: 1, arch: 1 } }
    ]
  }
];
