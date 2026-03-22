window.STAGE3_BANKS = window.STAGE3_BANKS || {};

window.STAGE3_BANKS.or = [
  {
    id: 's3_or_01',
    phase: 'deep',
    cat: 'Math / OR 深挖 / 主线选择',
    triggerDirs: ['conv_opt', 'resource_alloc', 'risk_analysis', 'applied_modeling'],
    text: '如果以后长期围着 Math / OR 这类问题转，你最想把哪条线慢慢做下去？',
    opts: [
      { t: '把最优解本身找得更快、更准，也更说得清', d: { conv_opt: 2, optim: 2, large_scale_opt: 1 } },
      { t: '把资源、人力、产能和流程安排得更合理', d: { resource_alloc: 3, decision_science: 1, planning_uncertainty: 1 } },
      { t: '把风险和不确定性本身写进模型，而不是事后再解释', d: { risk_analysis: 3, uq: 1, stoch: 1 } },
      { t: '把真实世界系统做成可计算、可模拟、可验证的模型', d: { applied_modeling: 3, sci_comp: 1, stoch: 1 } }
    ]
  },
  {
    id: 's3_or_02',
    phase: 'deep',
    cat: 'Math / OR 深挖 / 优化路径',
    triggerDirs: ['conv_opt', 'comb_opt', 'optim', 'dynamic_prog'],
    text: '如果你更偏优化，最想长期深挖哪类问题？',
    opts: [
      { t: '把连续优化问题写得更漂亮、更有保证', d: { conv_opt: 3, nonconvex_opt: 1, variational: 1 } },
      { t: '在离散结构里做出真正可执行的最优方案', d: { comb_opt: 3, optim: 1, algo: 1 } },
      { t: '把大规模优化真正做成工程可用的方法', d: { optim: 3, large_scale_opt: 1, sci_comp: 1 } },
      { t: '处理一连串相关决策，而不是只做一次性求解', d: { dynamic_prog: 3, optim: 1, stoch: 1 } }
    ]
  },
  {
    id: 's3_or_03',
    phase: 'deep',
    cat: 'Math / OR 深挖 / 运筹场景',
    triggerDirs: ['scheduling', 'resource_alloc', 'revenue_opt', 'planning_uncertainty'],
    text: '如果你更偏运筹，最想长期把问题磨在哪类场景里？',
    opts: [
      { t: '排班、调度、路线和资源分配', d: { scheduling: 3, resource_alloc: 1, optim: 1 } },
      { t: '把资源、人力、库存或运力分到更合适的位置', d: { resource_alloc: 3, decision_science: 1, planning_uncertainty: 1 } },
      { t: '定价、收益和规则设计怎样互相咬合得更好', d: { revenue_opt: 3, mechanism_design: 1, game_th: 1 } },
      { t: '在环境变化和需求波动下，怎样把长期安排做得别一碰就散', d: { planning_uncertainty: 3, dynamic_prog: 1, risk_analysis: 1 } }
    ]
  },
  {
    id: 's3_or_04',
    phase: 'deep',
    cat: 'Math / OR 深挖 / 随机与风险',
    triggerDirs: ['stoch', 'uq', 'game_th', 'bayes'],
    text: '如果你更在意“不确定”这件事，最想长期做哪类问题？',
    opts: [
      { t: '理解随机系统怎样随时间演化，并据此建模', d: { stoch: 3, dynamic_prog: 1, uq: 1 } },
      { t: '给预测和决策加上更靠谱的不确定性刻画', d: { uq: 3, stoch: 1, bayes: 1 } },
      { t: '研究很多参与者在规则下会怎样博弈和响应', d: { game_th: 3, stoch: 1, econom: 1 } },
      { t: '让数据和先验一起参与判断，而不是只看单一结果', d: { bayes: 3, stoch: 1, stats: 1 } }
    ]
  },
  {
    id: 's3_or_05',
    phase: 'deep',
    cat: 'Math / OR 深挖 / 决策系统',
    triggerDirs: ['dynamic_prog', 'mechanism_design', 'planning_uncertainty', 'queueing'],
    text: '如果问题是“一步一步做决定”，你最想长期攻哪类？',
    opts: [
      { t: '当前选择会影响后续很多步时，怎样做更长期的规划', d: { dynamic_prog: 3, planning_uncertainty: 1, stoch: 1 } },
      { t: '很多参与者会彼此影响时，怎样把规则设计得站得住', d: { mechanism_design: 3, game_th: 1, econom: 1 } },
      { t: '需求、拥堵和等待一直在变时，怎样让系统继续做出高质量安排', d: { queueing: 3, planning_uncertainty: 1, resource_alloc: 1 } },
      { t: '让这类决策既能算得出，又能在现实里真正执行', d: { planning_uncertainty: 3, dynamic_prog: 1, risk_analysis: 1 } }
    ]
  },
  {
    id: 's3_or_06',
    phase: 'deep',
    cat: 'Math / OR 深挖 / 科学建模',
    triggerDirs: ['sci_comp', 'comp_bio', 'stoch', 'optim'],
    text: '如果你更偏科学建模，最想长期把哪类系统建清楚？',
    opts: [
      { t: '物理、工程或工业过程这类可以被严格模拟的系统', d: { sci_comp: 3, optim: 1, stoch: 1 } },
      { t: '生物、健康或复杂生命系统这类结构丰富的问题', d: { comp_bio: 3, sci_comp: 1, bayes: 1 } },
      { t: '带有明显随机性的动态系统', d: { stoch: 3, sci_comp: 1, uq: 1 } },
      { t: '需要把建模和优化结果一起落到现实决策里的系统', d: { optim: 2, decision_science: 2, sci_comp: 1 } }
    ]
  },
  {
    id: 's3_or_07',
    phase: 'deep',
    cat: 'Math / OR 深挖 / 长期标签',
    triggerDirs: ['conv_opt', 'resource_alloc', 'risk_analysis', 'mechanism_design'],
    text: '几年后你更希望别人因为你哪类能力而来找你？',
    opts: [
      { t: '因为你总能把复杂问题写成清楚、漂亮、能算的模型', d: { conv_opt: 2, optim: 2, large_scale_opt: 1 } },
      { t: '因为你总能把资源和流程安排得又优又能执行', d: { resource_alloc: 3, decision_science: 1, planning_uncertainty: 1 } },
      { t: '因为你总能把不确定、风险和边界讲明白', d: { risk_analysis: 3, uq: 1, bayes: 1 } },
      { t: '因为你总能把规则、激励和参与者行为想清楚', d: { mechanism_design: 3, game_th: 1, econom: 1 } }
    ]
  },
  {
    id: 's3_or_08',
    phase: 'deep',
    cat: 'Math / OR 深挖 / 输入材料',
    triggerDirs: ['large_scale_opt', 'resource_alloc', 'risk_analysis', 'applied_modeling'],
    text: '如果你未来几年一直盯着一类“问题材料”打磨，你更想选哪种？',
    opts: [
      { t: '一大堆约束和目标，想把超大规模方案排得更优更稳', d: { large_scale_opt: 4, resource_alloc: 1, optim: 1 } },
      { t: '真实业务系统的资源、流程和运营规则', d: { resource_alloc: 3, decision_science: 1, revenue_opt: 1 } },
      { t: '随机波动、风险暴露和不确定决策', d: { risk_analysis: 3, uq: 1, bayes: 1 } },
      { t: '一个复杂系统的机理模型，想把它算清楚、模拟清楚', d: { applied_modeling: 3, sci_comp: 1, stoch: 1 } }
    ]
  },
  {
    id: 's3_or_09',
    phase: 'deep',
    cat: 'Math / OR 深挖 / 决策距离',
    triggerDirs: ['resource_alloc', 'large_scale_opt', 'mechanism_design', 'planning_uncertainty'],
    text: '你更想让自己的工作离最终决策有多近？',
    opts: [
      { t: '非常近，最好每次求解都直接影响资源安排或策略动作', d: { resource_alloc: 3, decision_science: 1, planning_uncertainty: 1 } },
      { t: '偏中间，先把模型、目标和约束写对，再给别人用', d: { large_scale_opt: 4, applied_modeling: 1, optim: 1 } },
      { t: '更靠近规则和机制设计，决定大家会怎样互动', d: { mechanism_design: 3, game_th: 1, econom: 1 } },
      { t: '更靠近长期规划，让每一步都为后续决策服务', d: { planning_uncertainty: 3, dynamic_prog: 1, risk_analysis: 1 } }
    ]
  },
  {
    id: 's3_or_10',
    phase: 'deep',
    cat: 'Math / OR 深挖 / 最想留下的能力',
    triggerDirs: ['conv_opt', 'scheduling', 'uq', 'comp_bio'],
    text: '如果最终只留下一个最鲜明的专业标签，你更希望是哪一种？',
    opts: [
      { t: '把数学结构看得很透，模型一写就很漂亮', d: { conv_opt: 2, nonconvex_opt: 1, variational: 1 } },
      { t: '把复杂流程排得井井有条，现实里也真能执行', d: { scheduling: 3, resource_alloc: 1, optim: 1 } },
      { t: '把风险、不确定和边界条件讲得非常清楚', d: { uq: 3, stoch: 1, bayes: 1 } },
      { t: '把某类复杂系统建成真正可算可解释的模型', d: { comp_bio: 2, sci_comp: 2, stoch: 1 } }
    ]
  },
  {
    id: 's3_or_11',
    phase: 'deep',
    cat: 'Math / OR 深挖 / 运营与规则',
    triggerDirs: ['resource_alloc', 'revenue_opt', 'queueing', 'planning_uncertainty'],
    text: '如果你更偏“现实系统怎么排、怎么配、怎么不堵”，最想长期做哪类题？',
    opts: [
      { t: '把资源、人力、产能或运力分到最合适的位置', d: { resource_alloc: 3, decision_science: 1, planning_uncertainty: 1 } },
      { t: '把定价、收益和规则设计成更优的长期策略', d: { revenue_opt: 3, game_th: 1, decision_science: 1 } },
      { t: '把排队、等待、拥堵和容量之间的关系算清楚', d: { queueing: 3, stoch: 1, planning_uncertainty: 1 } },
      { t: '在环境不确定时，仍然做出更稳妥的中长期规划', d: { planning_uncertainty: 3, dynamic_prog: 1, stoch: 1 } }
    ]
  },
  {
    id: 's3_or_12',
    phase: 'deep',
    cat: 'Math / OR 深挖 / 应用建模',
    triggerDirs: ['comp_finance', 'industrial_opt', 'energy_modeling', 'transport_modeling'],
    text: '如果你更想把数学和优化放进一个具体行业，最想长期扎在哪类系统里？',
    opts: [
      { t: '金融、风险和资产决策这类高不确定场景', d: { comp_finance: 3, risk_analysis: 1, bayes: 1 } },
      { t: '制造、工厂或复杂工业流程里的优化问题', d: { industrial_opt: 3, decision_science: 1, applied_modeling: 1 } },
      { t: '能源系统、负荷调度和电网这类大系统建模问题', d: { energy_modeling: 3, applied_modeling: 1, resource_alloc: 1 } },
      { t: '交通、物流和城市运行这类时空系统建模问题', d: { transport_modeling: 3, resource_alloc: 1, applied_modeling: 1 } }
    ]
  },
  {
    id: 's3_or_13',
    phase: 'deep',
    cat: 'Math / OR 深挖 / 优化内部细分',
    triggerDirs: ['nonconvex_opt', 'variational', 'large_scale_opt', 'opt_for_ai'],
    text: '如果你长期待在“优化”这条线上，更想把哪类能力磨成自己最拿手的活？',
    opts: [
      { t: '把非凸目标里的局部极值、收敛路径和训练稳定性啃透', d: { nonconvex_opt: 4, optim: 1, conv_opt: 1 } },
      { t: '把变分方法和能量形式的问题做得更漂亮、更有统一性', d: { variational: 4, conv_opt: 1, applied_modeling: 1 } },
      { t: '把超大规模优化做成真正能在工程里跑的东西，而不只是纸上方案', d: { large_scale_opt: 4, optim: 1, resource_alloc: 1 } },
      { t: '围绕 AI 系统本身的训练、调度和推理，把优化真正接进系统里', d: { opt_for_ai: 4, large_scale_opt: 1, decision_science: 1 } }
    ]
  },
  {
    id: 's3_or_14',
    phase: 'deep',
    cat: 'Math / OR 深挖 / 随机建模与仿真细分',
    triggerDirs: ['prob_modeling', 'simulation', 'seq_decision', 'comp_finance'],
    text: '如果你长期做“随机系统和复杂决策”，更想把哪类能力慢慢坐成主线？',
    opts: [
      { t: '把概率模型本身做扎实，让系统对随机现象的刻画更细也更靠得住', d: { prob_modeling: 4, stoch: 1, uq: 1 } },
      { t: '把仿真平台做成可靠实验场，让复杂系统能先在虚拟环境里被摸清', d: { simulation: 4, applied_modeling: 1, sci_comp: 1 } },
      { t: '把一连串相关决策做深，关注每一步如何影响后续很多步', d: { seq_decision: 4, dynamic_prog: 1, planning_uncertainty: 1 } },
      { t: '把金融和高不确定决策系统建模做成长期强项', d: { comp_finance: 4, risk_analysis: 1, bayes: 1 } }
    ]
  },
  {
    id: 's3_or_branch_01',
    phase: 'deep',
    cat: 'Math / OR 深挖 / 必问分叉',
    mustBranch: true,
    branchOrder: 1,
    text: '如果你打算在 Math / OR 里长期走下去，更想把哪类优化与决策能力慢慢坐成主线？',
    opts: [
      { t: '数学与科学计算底座，重点是建模、数值方法和可计算性', d: { applied_modeling: 1, sci_comp: 2, numerical_analysis: 1, comp_math: 1, matrix_tensor: 1 } },
      { t: '优化方法本身，重点是目标、约束、收敛和求解策略', d: { conv_opt: 1, nonconvex_opt: 2, large_scale_opt: 1, variational: 1, optim: 1 } },
      { t: '运营与资源配置，重点是怎样排、怎样配、怎样不堵', d: { resource_alloc: 2, scheduling: 2, revenue_opt: 1, decision_science: 1 } },
      { t: '随机系统与不确定性，重点是风险、排队、仿真和概率行为', d: { stoch: 1, queueing: 2, prob_modeling: 1, simulation: 1, uq: 1 } },
      { t: '序列决策与规划，重点是多步决策怎样越走越对', d: { dynamic_prog: 1, seq_decision: 2, planning_uncertainty: 2, mechanism_design: 1 } },
      { t: '行业建模与应用，重点是把方法放进金融、能源、交通和工业场景', d: { comp_finance: 1, industrial_opt: 1, energy_modeling: 1, transport_modeling: 1, decision_science: 1 } }
    ]
  },
  {
    id: 's3_or_branch_02',
    phase: 'deep',
    cat: 'Math / OR 深挖 / 必问分叉',
    mustBranch: true,
    branchOrder: 2,
    text: '如果你继续在 OR 里往深走，你更想长期把哪类“最难拆开的桶”先分清？',
    opts: [
      { t: '偏结构清楚、边界明确的优化问题，想把解法和性质说透', d: { conv_opt: 2, variational: 2, optim: 1 } },
      { t: '偏复杂、非凸、难求的优化问题，想把训练和求解难点啃下来', d: { nonconvex_opt: 2, opt_for_ai: 1, large_scale_opt: 1, optim: 1 } },
      { t: '偏离散、排程和组合决策问题，想把现实流程安排得更优', d: { scheduling: 2, comb_opt: 2, resource_alloc: 1 } },
      { t: '偏随机、风险和不确定系统，想知道系统在波动里会怎样', d: { stoch: 1, queueing: 1, risk_analysis: 2, uq: 2 } },
      { t: '偏机制、策略和长期决策，想研究多步选择如何影响最终结果', d: { dynamic_prog: 1, seq_decision: 1, planning_uncertainty: 2, mechanism_design: 2 } }
    ]
  }
];
