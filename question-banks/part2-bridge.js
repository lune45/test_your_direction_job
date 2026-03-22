window.STAGE2_TEMPLATES = [
  {
    id: 's2_01',
    phase: 'bridge',
    cat: '交界分流',
    text: '如果一类难题得盯上很多年，你更愿意每天和哪种别扭较劲？',
    hint: '这一部分只会把前面最接近的 2 到 3 个候选方向放在一起比较，不再让你在一大堆不相关选项里硬选。',
    optionMap: {
      ai: { t: '模型为什么突然灵了，又为什么会在关键地方失手', sub: '日常会一直围着能力边界打转。', d: { foundation: 1, repr: 1, llm: 1, safety: 1 }, domains: { ai: 3, ds: 0.4 } },
      cs: { t: '系统为什么一放大就变慢、变贵、还不好救', sub: '日常会一直和复杂度与恢复力较劲。', d: { systems: 1, dist_sys: 1, cloud: 1, db: 1 }, domains: { cs: 3, ce: 0.6 } },
      ds: { t: '数据里哪些信号能信，哪些只是表面像有关系', sub: '日常会一点点把证据链抠实。', d: { stats: 1, bayes: 1, decision_analytics: 1, causal: 1 }, domains: { ds: 3, or: 0.6 } },
      robotics: { t: '系统到了真实环境，为什么总有一环看错、判错或动错', sub: '每天都在和现场闭环较真。', d: { robotics: 1, perception: 1, motion: 1, autonomous: 1 }, domains: { robotics: 3, ee: 0.6 } },
      ee: { t: '噪声、时延和反馈一叠上来，链路为什么就不稳了', sub: '真正难的是把物理约束压进可控范围。', d: { signal: 1, control: 1, comm: 1, embedded: 1 }, domains: { ee: 3, robotics: 0.6 } },
      ce: { t: '同样的能力，为什么一落到设备侧就跑不快、搬不动', sub: '心思会更多花在算存传的组织方式上。', d: { arch: 1, mem_sys: 1, hw_sw: 1, ai_hw: 1 }, domains: { ce: 3, cs: 0.6 } },
      or: { t: '限制一多，为什么总排不出那个又好又能落地的方案', sub: '日常会一直和取舍本身打交道。', d: { optim: 1, scheduling: 1, resource_alloc: 1, stoch: 1 }, domains: { or: 3, ds: 0.6 } }
    }
  },
  {
    id: 's2_02',
    phase: 'bridge',
    cat: '交界分流',
    text: '接到一个很模糊的问题时，你最自然会先补哪一层？',
    optionMap: {
      ai: { t: '先确认能力边界：它到底会什么，不会什么', sub: '会先追“学没学会”这件事。', d: { foundation: 1, transfer: 1, repr: 1, xai: 1 }, domains: { ai: 3, ds: 0.4 } },
      cs: { t: '先理服务边界、状态和依赖，别后面越修越乱', sub: '先把系统骨架站稳。', d: { systems: 1, dist_sys: 1, db: 1, stream: 1 }, domains: { cs: 3, ce: 0.5 } },
      ds: { t: '先看数据口径、样本质量和证据链站不站得住', sub: '先判断凭什么能下这个结论。', d: { stats: 1, data_qual: 1, bayes: 1, experimentation: 1 }, domains: { ds: 3, or: 0.6 } },
      robotics: { t: '先看感知、决策、动作这条闭环哪儿没接顺', sub: '会先把现场闭环顺下来。', d: { robotics: 1, perception: 1, motion: 1, slam: 1 }, domains: { robotics: 3, ee: 0.6 } },
      ee: { t: '先看传感、链路、控制参数和稳定边界', sub: '先找真实链路里最先失稳的地方。', d: { signal: 1, control: 1, sensor_signal: 1, realtime: 1 }, domains: { ee: 3, robotics: 0.6 } },
      ce: { t: '先看算、存、传和协同路径到底卡在哪层', sub: '先把底层瓶颈揪出来。', d: { arch: 1, mem_sys: 1, hw_sw: 1, accelerator_arch: 1 }, domains: { ce: 3, cs: 0.6 } },
      or: { t: '先把目标、约束和资源摆清楚，再谈求解', sub: '先把问题写对，再去追答案。', d: { optim: 1, decision_science: 1, resource_alloc: 1, planning_uncertainty: 1 }, domains: { or: 3, ds: 0.6 } }
    }
  },
  {
    id: 's2_03',
    phase: 'bridge',
    cat: '交界分流',
    text: '哪种工作材料最容易让你坐下来就不想起身？',
    optionMap: {
      ai: { t: '误差案例、模型输出和评测细节', sub: '会一直想知道它到底差在了哪。', d: { llm: 1, foundation: 1, safety: 1, repr: 1 }, domains: { ai: 3, ds: 0.4 } },
      cs: { t: '日志、监控、调用链和故障现场', sub: '一看这类东西就想顺着往下查。', d: { systems: 1, dist_sys: 1, cloud: 1, net_measure: 1 }, domains: { cs: 3, ce: 0.5 } },
      ds: { t: '样本、波动、置信区间和结论边界', sub: '更容易盯住证据是不是站得住。', d: { stats: 1, bayes: 1, predictive_modeling: 1, applied_stats: 1 }, domains: { ds: 3, or: 0.6 } },
      robotics: { t: '真机日志、轨迹、地图和现场视频', sub: '会自然地从闭环里找原因。', d: { robotics: 1, slam: 1, perception: 1, motion: 1 }, domains: { robotics: 3, ee: 0.5 } },
      ee: { t: '波形、噪声、时延和反馈曲线', sub: '这些材料本身就很有信息量。', d: { signal: 1, control: 1, stat_signal: 1, sensor_signal: 1 }, domains: { ee: 3, robotics: 0.5 } },
      ce: { t: 'cache miss、带宽、时序和数据搬运', sub: '会本能地去看底层哪里白白浪费了。', d: { mem_sys: 1, arch: 1, ai_hw: 1, hw_sw: 1 }, domains: { ce: 3, cs: 0.6 } },
      or: { t: '约束表、排程表、成本和资源配额', sub: '会很想把这些限制重新摆一遍。', d: { optim: 1, scheduling: 1, resource_alloc: 1, revenue_opt: 1 }, domains: { or: 3, ds: 0.6 } }
    }
  },
  {
    id: 's2_04',
    phase: 'bridge',
    cat: '交界分流',
    text: '哪种“终于成了”的瞬间最像你会真心高兴的时刻？',
    optionMap: {
      ai: { t: '换个任务也没那么容易失手，说明它真学到东西了', sub: '更在意能力是不是真的长出来。', d: { foundation: 1, transfer: 1, llm: 1, multimodal: 1 }, domains: { ai: 3, ds: 0.4 } },
      cs: { t: '系统上量后还是稳，大家不再提心吊胆', sub: '那种“终于敢长期依赖”的感觉很强。', d: { systems: 1, dist_sys: 1, cloud: 1, storage_sys: 1 }, domains: { cs: 3, ce: 0.5 } },
      ds: { t: '原来靠感觉的判断，现在终于有了能站住的依据', sub: '更看重结论能不能被真正采纳。', d: { stats: 1, decision_analytics: 1, bayes: 1, experimentation: 1 }, domains: { ds: 3, or: 0.6 } },
      robotics: { t: '机器在现场真的把事做成了，不只是 demo 好看', sub: '更看重真实场景里的闭环完成。', d: { robotics: 1, autonomous: 1, motion: 1, perception: 1 }, domains: { robotics: 3, ee: 0.5 } },
      ee: { t: '链路在真实工况下稳住了，误差和漂移也压下去了', sub: '物理系统终于听话会很有成就感。', d: { control: 1, signal: 1, comm: 1, embedded: 1 }, domains: { ee: 3, robotics: 0.6 } },
      ce: { t: '底层路径一理顺，同样任务就是快了一截', sub: '更在意效率是不是从底下被抬起来。', d: { arch: 1, mem_sys: 1, ai_hw: 1, accelerator_arch: 1 }, domains: { ce: 3, cs: 0.6 } },
      or: { t: '在一堆限制里，方案终于既顺又能执行', sub: '真正会让人开心的是取舍终于合理了。', d: { optim: 1, scheduling: 1, resource_alloc: 1, decision_science: 1 }, domains: { or: 3, ds: 0.6 } }
    }
  },
  {
    id: 's2_05',
    phase: 'bridge',
    cat: '交界分流',
    text: '哪种失败最会让你忍不住一直往下复盘？',
    optionMap: {
      ai: { t: '看起来会，一换场景就像没学过', sub: '这类翻车案例很容易让人一路追到底。', d: { transfer: 1, foundation: 1, repr: 1, safety: 1 }, domains: { ai: 3, ds: 0.4 } },
      cs: { t: '单点没事，规模一上来就连着掉链子', sub: '更会去追系统骨架哪里没顶住。', d: { systems: 1, dist_sys: 1, cloud: 1, stream: 1 }, domains: { cs: 3, ce: 0.5 } },
      ds: { t: '口径一变，原来的结论就不太敢信', sub: '更在意判断是从哪一步先跑偏的。', d: { data_qual: 1, stats: 1, experimentation: 1, bayes: 1 }, domains: { ds: 3, or: 0.6 } },
      robotics: { t: '仿真没毛病，真机一上场就各种失手', sub: '这类问题会让人很想一路追到底。', d: { robotics: 1, embodied: 1, motion: 1, perception: 1 }, domains: { robotics: 3, ee: 0.5 } },
      ee: { t: '噪声、扰动和时延一上来，系统就开始发飘', sub: '更愿意和失稳边界反复拉扯。', d: { control: 1, signal: 1, opt_ctrl: 1, realtime: 1 }, domains: { ee: 3, robotics: 0.6 } },
      ce: { t: '算法没错，但设备侧就是慢、热、卡', sub: '更想把真正的底层瓶颈揪出来。', d: { arch: 1, mem_sys: 1, ai_hw: 1, hw_sw: 1 }, domains: { ce: 3, cs: 0.6 } },
      or: { t: '纸面上很漂亮，一加真实限制就排不出来', sub: '说明问题写得还不够像现实。', d: { optim: 1, scheduling: 1, uq: 1, planning_uncertainty: 1 }, domains: { or: 3, ds: 0.6 } }
    }
  },
  {
    id: 's2_06',
    phase: 'bridge',
    cat: '交界分流',
    text: '如果以后经常和一群人讨论同类问题，你更适应哪种聊天语境？',
    optionMap: {
      ai: { t: '模型行为、评测、泛化和能力边界', sub: '围着“它到底会不会”聊不会腻。', d: { llm: 1, foundation: 1, safety: 1, xai: 1 }, domains: { ai: 3, ds: 0.4 } },
      cs: { t: '架构、容量、故障恢复和一致性', sub: '更习惯在系统骨架层面来回拆。', d: { systems: 1, dist_sys: 1, db: 1, cloud: 1 }, domains: { cs: 3, ce: 0.5 } },
      ds: { t: '样本、偏差、波动和证据强弱', sub: '更习惯先把结论的可信度说清楚。', d: { stats: 1, bayes: 1, experimentation: 1, data_qual: 1 }, domains: { ds: 3, or: 0.6 } },
      robotics: { t: '真机、场景、任务完成率和安全边界', sub: '对现场里那些细节会很敏感。', d: { robotics: 1, hri: 1, perception: 1, autonomous: 1 }, domains: { robotics: 3, ee: 0.5 } },
      ee: { t: '波形、链路、控制回路和传感器状态', sub: '像是在聊一个会呼吸的物理系统。', d: { signal: 1, control: 1, comm: 1, sensor_signal: 1 }, domains: { ee: 3, robotics: 0.6 } },
      ce: { t: '缓存、带宽、时序和软硬件配合', sub: '会自然把注意力落到通路与组织方式。', d: { arch: 1, mem_sys: 1, hw_sw: 1, fpga: 1 }, domains: { ce: 3, cs: 0.6 } },
      or: { t: '约束、目标函数、稳健性和求解速度', sub: '更适应从取舍本身往下聊。', d: { optim: 1, stoch: 1, or_ops: 1, uq: 1 }, domains: { or: 3, ds: 0.6 } }
    }
  },
  {
    id: 's2_07',
    phase: 'bridge',
    cat: '交界分流',
    text: '项目已经能跑了，你下一步最想先把哪种品质磨出来？',
    optionMap: {
      ai: { t: '把能力边界再推清楚一点，别只在熟悉题上好看', sub: '还是会先盯住会不会泛化。', d: { foundation: 1, transfer: 1, llm: 1, multimodal: 1 }, domains: { ai: 3, ds: 0.4 } },
      cs: { t: '把系统韧性做出来，出事也能很快恢复', sub: '更在意它能不能长期扛住。', d: { systems: 1, dist_sys: 1, cloud: 1, storage_sys: 1 }, domains: { cs: 3, ce: 0.5 } },
      ds: { t: '把判断边界讲清楚，知道什么时候该信、什么时候该停', sub: '更在意结论能不能被安全使用。', d: { stats: 1, bayes: 1, decision_analytics: 1, experimentation: 1 }, domains: { ds: 3, or: 0.6 } },
      robotics: { t: '把现场闭环磨顺，让它不只会在理想条件下工作', sub: '更在意真环境里是否还能站住。', d: { robotics: 1, embodied: 1, perception: 1, motion: 1 }, domains: { robotics: 3, ee: 0.6 } },
      ee: { t: '把稳定性和响应品质继续压进可控范围', sub: '会继续往边界条件最难的地方顶。', d: { control: 1, signal: 1, opt_ctrl: 1, comm: 1 }, domains: { ee: 3, robotics: 0.5 } },
      ce: { t: '把设备侧的算、存、传配合打磨到不再内耗', sub: '更想把底层效率磨成确定性。', d: { arch: 1, mem_sys: 1, hw_sw: 1, ai_hw: 1 }, domains: { ce: 3, cs: 0.6 } },
      or: { t: '把方案改到经得住条件来回变，不用一变就整盘重排', sub: '更在意方案能不能扛住现实反复。', d: { optim: 1, planning_uncertainty: 1, scheduling: 1, resource_alloc: 1 }, domains: { or: 3, ds: 0.6 } }
    }
  },
  {
    id: 's2_08',
    phase: 'bridge',
    cat: '交界分流',
    text: '哪种责任压在身上，你反而会觉得这事值得做？',
    optionMap: {
      ai: { t: '关键任务会把答案交给模型，容错很低', sub: '更愿意把责任放在能力本身上。', d: { safety: 1, foundation: 1, llm: 1, xai: 1 }, domains: { ai: 3, ds: 0.4 } },
      cs: { t: '一出问题就是一串服务受影响，得扛住', sub: '更愿意守住系统层面的稳定。', d: { systems: 1, dist_sys: 1, cloud: 1, db: 1 }, domains: { cs: 3, ce: 0.5 } },
      ds: { t: '结论会被拿去做重要决定，不能说满也不能说虚', sub: '更愿意对判断边界负责。', d: { stats: 1, bayes: 1, decision_analytics: 1, causal: 1 }, domains: { ds: 3, or: 0.6 } },
      robotics: { t: '系统一旦判断错，现场后果会很直接', sub: '更愿意扛真实环境里的决策责任。', d: { robotics: 1, autonomous: 1, motion: 1, perception: 1 }, domains: { robotics: 3, ee: 0.6 } },
      ee: { t: '链路失稳不是数字难看而已，设备真的会出问题', sub: '更愿意对物理系统的边界负责。', d: { control: 1, signal: 1, embedded: 1, comm: 1 }, domains: { ee: 3, robotics: 0.5 } },
      ce: { t: '底层一慢，全链路都得跟着背锅', sub: '更愿意对平台底座的效率负责。', d: { arch: 1, mem_sys: 1, ai_hw: 1, hw_sw: 1 }, domains: { ce: 3, cs: 0.6 } },
      or: { t: '排法一错，资源、成本和时间都会实打实地浪费', sub: '更愿意对取舍结果本身负责。', d: { optim: 1, resource_alloc: 1, scheduling: 1, decision_science: 1 }, domains: { or: 3, ds: 0.6 } }
    }
  },
  {
    id: 's2_09',
    phase: 'bridge',
    cat: '交界分流',
    text: '如果以后你的工作很难被一句话概括，你希望复杂主要来自哪里？',
    optionMap: {
      ai: { t: '难在能力本身还没被讲透，很多现象只是刚露头', sub: '复杂更多来自能力边界本身。', d: { foundation: 1, llm: 1, repr: 1, multimodal: 1 }, domains: { ai: 3, ds: 0.4 } },
      cs: { t: '难在组件太多、依赖太深，牵一发就动全身', sub: '复杂主要来自系统骨架和协作关系。', d: { systems: 1, dist_sys: 1, cloud: 1, stream: 1 }, domains: { cs: 3, ce: 0.5 } },
      ds: { t: '难在变量太多，真假信号混在一起', sub: '复杂主要来自判断本身。', d: { stats: 1, bayes: 1, experimentation: 1, predictive_modeling: 1 }, domains: { ds: 3, or: 0.6 } },
      robotics: { t: '难在真实世界太脏太变，系统得边看边做', sub: '复杂主要来自现场闭环。', d: { robotics: 1, embodied: 1, autonomous: 1, perception: 1 }, domains: { robotics: 3, ee: 0.5 } },
      ee: { t: '难在物理条件摆在那里，很多约束躲不开', sub: '复杂主要来自链路和物理边界。', d: { signal: 1, control: 1, comm: 1, elec_sys: 1 }, domains: { ee: 3, robotics: 0.6 } },
      ce: { t: '难在软硬件不是各做各的，合起来才见真章', sub: '复杂主要来自底层协同。', d: { arch: 1, hw_sw: 1, ai_hw: 1, soc: 1 }, domains: { ce: 3, cs: 0.6 } },
      or: { t: '难在每个选择都在和别的选择抢空间', sub: '复杂主要来自取舍的连锁反应。', d: { optim: 1, stoch: 1, decision_science: 1, planning_uncertainty: 1 }, domains: { or: 3, ds: 0.6 } }
    }
  },
  {
    id: 's2_10',
    phase: 'bridge',
    cat: '交界分流',
    text: '如果一件事要慢慢做成熟手，你更希望最后留下哪种感觉？',
    optionMap: {
      ai: { t: '把一个能力慢慢磨到既更强也更不容易跑偏', sub: '更喜欢和能力边界长期打交道。', d: { foundation: 1, safety: 1, llm: 1, transfer: 1 }, domains: { ai: 3, ds: 0.4 } },
      cs: { t: '把复杂系统拆清楚，再一点点养成可靠底座', sub: '更喜欢把长期可依赖这件事做出来。', d: { systems: 1, dist_sys: 1, storage_sys: 1, cloud: 1 }, domains: { cs: 3, ce: 0.5 } },
      ds: { t: '把复杂信息翻成别人真的敢据此行动的判断', sub: '更喜欢把证据慢慢磨实。', d: { stats: 1, decision_analytics: 1, bayes: 1, domain_ds: 1 }, domains: { ds: 3, or: 0.6 } },
      robotics: { t: '把感知、决策和动作这条链慢慢调顺', sub: '更喜欢让现场闭环越跑越像样。', d: { robotics: 1, perception: 1, motion: 1, autonomous: 1 }, domains: { robotics: 3, ee: 0.6 } },
      ee: { t: '把链路、控制和设备状态调到心里有数', sub: '更喜欢那种系统终于听话的感觉。', d: { control: 1, signal: 1, embedded: 1, sensor_signal: 1 }, domains: { ee: 3, robotics: 0.5 } },
      ce: { t: '把底层路径理顺，让性能不是靠碰运气', sub: '更喜欢底座一顺、上面都跟着顺。', d: { arch: 1, mem_sys: 1, hw_sw: 1, ai_hw: 1 }, domains: { ce: 3, cs: 0.6 } },
      or: { t: '把复杂约束写成真正能落地的好方案', sub: '更喜欢取舍被写对的手感。', d: { optim: 1, scheduling: 1, resource_alloc: 1, decision_science: 1 }, domains: { or: 3, ds: 0.6 } }
    }
  }
];
