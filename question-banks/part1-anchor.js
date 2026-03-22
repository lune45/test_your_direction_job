window.STAGE1_QS = [
  {
    id: 's1_ai_01',
    phase: 'anchor',
    cat: '粗分流 / AI 锚点',
    anchorFamily: 'ai',
    anchorRound: 1,
    text: '一个东西已经能跑出结果了，但你还是忍不住想继续追哪种“不舒服”？',
    opts: [
      { t: '换个场景就掉得厉害，说明它大概还没真学会', d: { foundation: 2, repr: 1, transfer: 1 }, domains: { ai: 3, ds: 0.4 } },
      { t: '数据看着不少，可真要下判断总觉得证据差一口气', d: { stats: 2, bayes: 1, decision_analytics: 1 }, domains: { ds: 3, or: 0.6 } },
      { t: '单机挺顺，一放大就开始慢、贵、难恢复', d: { systems: 2, dist_sys: 1, cloud: 1 }, domains: { cs: 3, ce: 0.6 } },
      { t: '目标一多、限制一多，方案就总差最后那口顺气', d: { optim: 2, resource_alloc: 1, scheduling: 1 }, domains: { or: 3, ds: 0.6 } }
    ]
  },
  {
    id: 's1_cs_01',
    phase: 'anchor',
    cat: '粗分流 / CS 锚点',
    anchorFamily: 'cs',
    anchorRound: 1,
    text: '看一个复杂项目的复盘时，你最容易被哪类问题勾住？',
    opts: [
      { t: '服务边界没切好，后面一层层连着出事', d: { systems: 2, dist_sys: 1, data_mgmt: 1 }, domains: { cs: 3, ce: 0.4 } },
      { t: '算力、内存和数据搬运到底先卡在了哪一层', d: { arch: 2, mem_sys: 1, hw_sw: 1 }, domains: { ce: 3, cs: 0.6 } },
      { t: '噪声、时延和反馈为什么一下就把链路带偏', d: { control: 2, signal: 1, sensor_signal: 1 }, domains: { ee: 3, robotics: 0.5 } },
      { t: '指标不少，但到底先该信哪个信号', d: { stats: 2, experimentation: 1, data_qual: 1 }, domains: { ds: 3, or: 0.4 } }
    ]
  },
  {
    id: 's1_ds_01',
    phase: 'anchor',
    cat: '粗分流 / DS 锚点',
    anchorFamily: 'ds',
    anchorRound: 1,
    text: '同样都是“做判断”，哪种难点更像你愿意长期啃的东西？',
    opts: [
      { t: '很多因素缠在一起，还得尽量分清谁真的起了作用', d: { stats: 2, causal: 1, econom: 1 }, domains: { ds: 3, or: 0.6 } },
      { t: '约束和目标互相拉扯，得给出能执行的排法', d: { optim: 2, scheduling: 1, resource_alloc: 1 }, domains: { or: 3, ds: 0.5 } },
      { t: '模型看着会，一到陌生情况又像没学过', d: { repr: 1, transfer: 2, foundation: 1 }, domains: { ai: 3, ds: 0.4 } },
      { t: '链路太长，结果从哪一步开始跑偏都不好找', d: { systems: 2, data_mgmt: 1, stream: 1 }, domains: { cs: 3, ds: 0.4 } }
    ]
  },
  {
    id: 's1_rb_01',
    phase: 'anchor',
    cat: '粗分流 / Robotics 锚点',
    anchorFamily: 'robotics',
    anchorRound: 1,
    text: '如果东西最后要进真实世界，你最在意哪一环别先掉链子？',
    opts: [
      { t: '系统得先看懂周围，再知道下一步该怎么做', d: { robotics: 2, perception: 1, motion: 1 }, domains: { robotics: 3, ee: 0.5 } },
      { t: '传感、执行和反馈这条物理链要长期稳得住', d: { control: 2, signal: 1, embedded: 1 }, domains: { ee: 3, robotics: 0.6 } },
      { t: '模型别一离开熟悉场景就开始犯傻', d: { foundation: 1, transfer: 2, multimodal: 1 }, domains: { ai: 3, robotics: 0.4 } },
      { t: '机端算力、内存和通路别先把能力卡死', d: { ai_hw: 1, arch: 2, mem_sys: 1 }, domains: { ce: 3, robotics: 0.5 } }
    ]
  },
  {
    id: 's1_ee_01',
    phase: 'anchor',
    cat: '粗分流 / EE 锚点',
    anchorFamily: 'ee',
    anchorRound: 1,
    text: '面对一个带设备和反馈链路的系统，你最想先掐哪条线往下看？',
    opts: [
      { t: '噪声、时延、参数和稳定边界到底谁在作怪', d: { signal: 1, control: 2, sensor_signal: 1 }, domains: { ee: 3, robotics: 0.5 } },
      { t: '感知、定位、动作这条闭环是不是哪里没接顺', d: { robotics: 2, slam: 1, motion: 1 }, domains: { robotics: 3, ee: 0.6 } },
      { t: '算、存、传里哪一层把设备侧拖慢了', d: { arch: 2, mem_sys: 1, hw_sw: 1 }, domains: { ce: 3, ee: 0.4 } },
      { t: '后台平台或服务链一放大，哪层先把整体拖脆了', d: { systems: 2, dist_sys: 1, cloud: 1 }, domains: { cs: 3, ce: 0.4 } }
    ]
  },
  {
    id: 's1_or_01',
    phase: 'anchor',
    cat: '粗分流 / OR 锚点',
    anchorFamily: 'or',
    anchorRound: 1,
    text: '一件事越复杂，你越想先把哪种东西写清楚？',
    opts: [
      { t: '目标、约束和取舍到底该怎么摆', d: { optim: 2, decision_science: 1, resource_alloc: 1 }, domains: { or: 3, ds: 0.6 } },
      { t: '哪些信号能信，哪些只是碰巧一起出现', d: { stats: 2, bayes: 1, experimentation: 1 }, domains: { ds: 3, or: 0.5 } },
      { t: '服务边界和状态流转该怎么拆才不乱', d: { systems: 2, dist_sys: 1, db: 1 }, domains: { cs: 3, ce: 0.4 } },
      { t: '模型到底学到了什么，哪些只是表面像会', d: { repr: 1, foundation: 2, xai: 1 }, domains: { ai: 3, ds: 0.3 } }
    ]
  },
  {
    id: 's1_ce_01',
    phase: 'anchor',
    cat: '粗分流 / CE 锚点',
    anchorFamily: 'ce',
    anchorRound: 1,
    text: '如果问题最后卡在“东西就是跑不起来”，你最想先查哪一层？',
    opts: [
      { t: '算力、内存、带宽和数据搬运怎么配才不浪费', d: { arch: 2, mem_sys: 1, ai_hw: 1 }, domains: { ce: 3, cs: 0.6 } },
      { t: '多机服务和平台链路是不是先把复杂度放大了', d: { systems: 2, dist_sys: 1, cloud: 1 }, domains: { cs: 3, ce: 0.5 } },
      { t: '传感、控制和设备接口是不是天生就吃紧', d: { embedded: 1, control: 2, signal: 1 }, domains: { ee: 3, robotics: 0.4 } },
      { t: '模型本身是不是太重了，不适合落到设备侧', d: { efficient: 1, quant: 1, inf_opt: 2 }, domains: { ai: 3, ce: 0.6 } }
    ]
  },
  {
    id: 's1_ai_02',
    phase: 'anchor',
    cat: '粗分流 / AI 锚点',
    anchorFamily: 'ai',
    anchorRound: 2,
    text: '真要花几年磨一件事，哪种进展最能让你觉得这时间花得值？',
    opts: [
      { t: '模型遇到没见过的问题也没那么容易失手了', d: { foundation: 2, transfer: 1, repr: 1 }, domains: { ai: 3, ds: 0.4 } },
      { t: '一堆杂乱信息终于能支撑靠谱判断', d: { stats: 2, decision_analytics: 1, bayes: 1 }, domains: { ds: 3, or: 0.5 } },
      { t: '原来脆弱的服务终于能稳稳扛住量了', d: { systems: 2, cloud: 1, dist_sys: 1 }, domains: { cs: 3, ce: 0.5 } },
      { t: '在很多限制下，方案终于排得又顺又值', d: { optim: 2, scheduling: 1, resource_alloc: 1 }, domains: { or: 3, ds: 0.6 } }
    ]
  },
  {
    id: 's1_cs_02',
    phase: 'anchor',
    cat: '粗分流 / CS 锚点',
    anchorFamily: 'cs',
    anchorRound: 2,
    text: '如果别人来找你救火，你其实更愿意接哪种烂摊子？',
    opts: [
      { t: '服务扩完容以后越来越难排查，故障一串就是一片', d: { systems: 2, dist_sys: 1, storage_sys: 1 }, domains: { cs: 3, ce: 0.4 } },
      { t: '软件没明显错，可性能就是被底层路径拖住', d: { arch: 2, hw_sw: 1, mem_sys: 1 }, domains: { ce: 3, cs: 0.6 } },
      { t: '设备和控制链一复杂就开始不听话', d: { control: 2, embedded: 1, signal: 1 }, domains: { ee: 3, robotics: 0.5 } },
      { t: '规则一多之后，怎么排都像还有更好的解没找到', d: { optim: 2, decision_science: 1, scheduling: 1 }, domains: { or: 3, ds: 0.4 } }
    ]
  },
  {
    id: 's1_ds_02',
    phase: 'anchor',
    cat: '粗分流 / DS 锚点',
    anchorFamily: 'ds',
    anchorRound: 2,
    text: '哪种工作材料最像你愿意天天翻来覆去看的东西？',
    opts: [
      { t: '样本、波动、置信区间和结论边界', d: { stats: 2, bayes: 1, applied_stats: 1 }, domains: { ds: 3, or: 0.5 } },
      { t: '排程表、资源表和一长串现实限制', d: { resource_alloc: 2, scheduling: 1, optim: 1 }, domains: { or: 3, ds: 0.6 } },
      { t: '日志、监控、异常链路和回滚记录', d: { systems: 2, data_mgmt: 1, stream: 1 }, domains: { cs: 3, ds: 0.4 } },
      { t: '模型输出、误差案例和评测细节', d: { repr: 1, llm: 1, foundation: 2 }, domains: { ai: 3, ds: 0.4 } }
    ]
  },
  {
    id: 's1_rb_02',
    phase: 'anchor',
    cat: '粗分流 / Robotics 锚点',
    anchorFamily: 'robotics',
    anchorRound: 2,
    text: '哪种现场问题最会让你下班后还在脑子里复盘？',
    opts: [
      { t: '到了真环境，感知、定位、动作配合总有一环出岔子', d: { robotics: 2, perception: 1, slam: 1 }, domains: { robotics: 3, ee: 0.5 } },
      { t: '噪声、扰动和时延一上来，系统就不太听话', d: { control: 2, signal: 1, realtime: 1 }, domains: { ee: 3, robotics: 0.6 } },
      { t: '感知和决策都对，可设备侧还是跑不动', d: { ai_hw: 1, arch: 2, hw_sw: 1 }, domains: { ce: 3, robotics: 0.5 } },
      { t: '训练时明明不错，换个场景就掉一截', d: { transfer: 2, foundation: 1, multimodal: 1 }, domains: { ai: 3, robotics: 0.4 } }
    ]
  },
  {
    id: 's1_ee_02',
    phase: 'anchor',
    cat: '粗分流 / EE 锚点',
    anchorFamily: 'ee',
    anchorRound: 2,
    text: '哪种“终于调顺了”的时刻最会让你有满足感？',
    opts: [
      { t: '链路在真实工况下稳了、准了，也不容易漂了', d: { control: 2, signal: 1, sensor_signal: 1 }, domains: { ee: 3, robotics: 0.4 } },
      { t: '机器在现场终于不再迷路、失手或乱动了', d: { robotics: 2, motion: 1, perception: 1 }, domains: { robotics: 3, ee: 0.5 } },
      { t: '底层平台一理顺，设备侧性能立刻上来', d: { arch: 2, mem_sys: 1, ai_hw: 1 }, domains: { ce: 3, cs: 0.5 } },
      { t: '很多组件一起跑时，整体系统终于不再抖了', d: { systems: 2, dist_sys: 1, cloud: 1 }, domains: { cs: 3, ce: 0.4 } }
    ]
  },
  {
    id: 's1_or_02',
    phase: 'anchor',
    cat: '粗分流 / OR 锚点',
    anchorFamily: 'or',
    anchorRound: 2,
    text: '哪种成就更像你会追很多年的那种？',
    opts: [
      { t: '同样的资源，方案就是比以前排得更漂亮也更能执行', d: { optim: 2, scheduling: 1, decision_science: 1 }, domains: { or: 3, ds: 0.6 } },
      { t: '判断终于不再靠感觉，结论有证据撑着', d: { stats: 2, bayes: 1, causal: 1 }, domains: { ds: 3, or: 0.5 } },
      { t: '大系统终于变得清楚、稳当、好维护', d: { systems: 2, cloud: 1, data_mgmt: 1 }, domains: { cs: 3, ce: 0.4 } },
      { t: '模型终于能在陌生问题上少失手', d: { foundation: 2, transfer: 1, safety: 1 }, domains: { ai: 3, ds: 0.3 } }
    ]
  },
  {
    id: 's1_ce_02',
    phase: 'anchor',
    cat: '粗分流 / CE 锚点',
    anchorFamily: 'ce',
    anchorRound: 2,
    text: '哪种底层改动最像你愿意长期投入的方向？',
    opts: [
      { t: '把硬件组织方式理顺，让同样任务明显快一截', d: { arch: 2, ai_hw: 1, mem_sys: 1 }, domains: { ce: 3, cs: 0.6 } },
      { t: '把系统平台理顺，让上层能力稳稳跑起来', d: { systems: 2, dist_sys: 1, cloud: 1 }, domains: { cs: 3, ce: 0.5 } },
      { t: '把设备和控制链打磨到长期可用', d: { embedded: 1, control: 2, signal: 1 }, domains: { ee: 3, robotics: 0.4 } },
      { t: '把感知和决策能力真正塞进真实机器里', d: { robotics: 2, embodied: 1, perception: 1 }, domains: { robotics: 3, ce: 0.5 } }
    ]
  }
];
