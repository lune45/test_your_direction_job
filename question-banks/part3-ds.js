window.STAGE3_BANKS = window.STAGE3_BANKS || {};

window.STAGE3_BANKS.ds = [
  {
    id: 's3_ds_01',
    phase: 'deep',
    cat: 'DS 深挖 / 判断方式',
    triggerDirs: ['stats', 'bayes', 'applied_stats', 'decision_analytics'],
    text: '真要在数据这边久待，你最想把哪种“判断方式”练到最稳？',
    opts: [
      { t: '把结论做得更稳，知道哪些规律是真的能站住的', d: { stats: 3, applied_stats: 1, bayes: 1 } },
      { t: '把不确定性也写进结论里，而不是只给一个单点答案', d: { bayes: 3, stats: 1, uq: 1 } },
      { t: '把复杂现象翻成可执行的分析和业务判断', d: { applied_stats: 3, decision_analytics: 1, stats: 1 } },
      { t: '把分析结果真正变成决策方案、策略动作和资源安排', d: { decision_analytics: 3, econom: 1, domain_ds: 1 } }
    ]
  },
  {
    id: 's3_ds_02',
    phase: 'deep',
    cat: 'DS 深挖 / 预测与建模',
    triggerDirs: ['predictive_modeling', 'ts_anal', 'stat_modeling', 'domain_ds'],
    text: '如果你更想做预测和建模，哪类问题最值得你一直投时间？',
    opts: [
      { t: '把特征、模型和业务问题连起来，做出更稳的预测', d: { predictive_modeling: 3, stat_modeling: 1, bayes: 1 } },
      { t: '追时间变化、季节性和提前预警，让趋势更早被看见', d: { ts_anal: 3, predictive_modeling: 1, stats: 1 } },
      { t: '把结构、分布和误差刻画得更扎实，而不是只追预测准头', d: { stat_modeling: 3, bayes: 1, uq: 1 } },
      { t: '把预测真正接到医疗、金融、制造等实际场景里', d: { domain_ds: 2, industrial_ds: 1, financial_ds: 1, health_ds: 1 } }
    ]
  },
  {
    id: 's3_ds_03',
    phase: 'deep',
    cat: 'DS 深挖 / 证据与识别',
    triggerDirs: ['causal', 'econom', 'stats', 'decision_analytics'],
    text: '如果你最在意“这个动作到底有没有用”，会更愿意长期做哪类工作？',
    opts: [
      { t: '把实验设计做扎实，让前后对比更可信', d: { causal: 3, experimentation: 1, stats: 1 } },
      { t: '在没有理想实验条件时，尽量从观测数据里做更好的识别', d: { econom: 3, causal: 2, stats: 1 } },
      { t: '把证据表达得更克制，让别人一眼知道边界在哪里', d: { stats: 3, bayes: 1, causal: 1 } },
      { t: '把识别结果真正接到策略、产品或业务动作里', d: { decision_analytics: 2, causal: 2, business_intel: 1 } }
    ]
  },
  {
    id: 's3_ds_04',
    phase: 'deep',
    cat: 'DS 深挖 / 实验与迭代',
    triggerDirs: ['experimentation', 'decision_analytics', 'mlops', 'domain_ds'],
    text: '如果你喜欢边上线边验证，最想长期待在哪类位置？',
    opts: [
      { t: '设计实验、看指标，判断改动是不是真的有效', d: { experimentation: 3, causal: 1, stats: 1 } },
      { t: '把实验结果尽快转成下一步动作，让团队持续更快试错', d: { decision_analytics: 3, experimentation: 1, mlops: 1 } },
      { t: '把模型和分析结果接到线上监控，及时发现漂移和回退', d: { mlops: 3, ds_eng: 1, experimentation: 1 } },
      { t: '把这些方法放进具体行业问题里，看现实决策怎样变化', d: { domain_ds: 2, causal: 1, health_ds: 1, industrial_ds: 1 } }
    ]
  },
  {
    id: 's3_ds_05',
    phase: 'deep',
    cat: 'DS 深挖 / 时间与风险',
    triggerDirs: ['ts_anal', 'bayes', 'domain_ds', 'econom'],
    text: '如果问题会一路跟着时间变化，你更想长期盯哪一类？',
    opts: [
      { t: '趋势、周期和异常，让变化更早被发现', d: { ts_anal: 3, stats: 1, predictive_modeling: 1 } },
      { t: '信息不全时怎样持续更新判断，不把不确定假装成确定', d: { bayes: 3, stats: 1, uq: 1 } },
      { t: '风险、价格或行为怎样随时间变化，并影响策略选择', d: { econom: 3, bayes: 1, ts_anal: 1 } },
      { t: '在具体行业场景里做长期预测、监测和早期预警', d: { domain_ds: 2, ts_anal: 1, mobility_ds: 1, env_ds: 1 } }
    ]
  },
  {
    id: 's3_ds_06',
    phase: 'deep',
    cat: 'DS 深挖 / 数据底座',
    triggerDirs: ['ds_eng', 'data_qual', 'mlops', 'decision_analytics'],
    text: '如果你更在意数据这件事得先靠谱，最想长期攻哪类问题？',
    opts: [
      { t: '让数据链路、加工流程和交付节奏更稳', d: { ds_eng: 3, data_qual: 1, mlops: 1 } },
      { t: '让口径、血缘和质量检查更清楚，少出现“同数不同义”', d: { data_qual: 3, ds_eng: 2, stats: 1 } },
      { t: '让模型上线、监控、回滚和实验记录更像成熟工程流程', d: { mlops: 3, ds_eng: 1, experimentation: 1 } },
      { t: '让这些底层能力最终更好服务分析和业务判断', d: { decision_analytics: 2, ds_eng: 2, business_intel: 1 } }
    ]
  },
  {
    id: 's3_ds_07',
    phase: 'deep',
    cat: 'DS 深挖 / 解释与表达',
    triggerDirs: ['stats', 'decision_analytics', 'domain_ds', 'bayes'],
    text: '如果结果最后总要交给别人拿去用，你最想长期练哪类能力？',
    opts: [
      { t: '把结论讲得严谨清楚，让人知道哪里能信、哪里要谨慎', d: { stats: 3, bayes: 1, applied_stats: 1 } },
      { t: '把复杂分析翻成可执行动作，不只停在报告里', d: { decision_analytics: 3, business_intel: 1, domain_ds: 1 } },
      { t: '把领域里的专业语境和数据结果真正接起来', d: { domain_ds: 2, health_ds: 1, industrial_ds: 1, stats: 1 } },
      { t: '把概率、风险和不确定性讲到别人也能据此行动', d: { bayes: 3, stats: 1, econom: 1 } }
    ]
  },
  {
    id: 's3_ds_08',
    phase: 'deep',
    cat: 'DS 深挖 / 场景偏好',
    triggerDirs: ['domain_ds', 'business_intel', 'econom', 'bayes'],
    text: '如果未来想把数据方法放进真实世界，你最可能长期待在哪类场景？',
    opts: [
      { t: '医疗、生物或健康场景，强调高责任和强解释', d: { domain_ds: 3, bayes: 1, stats: 1 } },
      { t: '产品、增长或商业场景，强调快速反馈和持续迭代', d: { business_intel: 3, experimentation: 1, mlops: 1 } },
      { t: '金融、风控或策略场景，强调稳健性和长期回报', d: { econom: 2, bayes: 2, domain_ds: 1 } },
      { t: '公共事务、社会或政策场景，强调识别、评估和解释', d: { econom: 3, causal: 1, domain_ds: 1 } }
    ]
  },
  {
    id: 's3_ds_09',
    phase: 'deep',
    cat: 'DS 深挖 / 生产化',
    triggerDirs: ['mlops', 'data_pipelines', 'data_qual', 'business_intel'],
    text: '如果你更相信分析和模型最后要在生产里站住，最想补哪类能力？',
    opts: [
      { t: '把训练、上线、监控和回滚做成稳定流程', d: { mlops: 3, ds_eng: 1, experimentation: 1 } },
      { t: '把数据供给做稳，让分析和模型少被底层拖住', d: { data_pipelines: 3, data_warehouse: 1, mlops: 1 } },
      { t: '把质量规则和异常检测做前置，不让问题拖到后面才爆', d: { data_qual: 3, ds_eng: 2, stats: 1 } },
      { t: '把结果真正嵌进产品或业务链路，而不是停在离线报告', d: { business_intel: 3, decision_analytics: 1, domain_ds: 1 } }
    ]
  },
  {
    id: 's3_ds_10',
    phase: 'deep',
    cat: 'DS 深挖 / 长期标签',
    triggerDirs: ['stats', 'bayes', 'ds_eng', 'domain_ds'],
    text: '几年后你更希望别人因为你哪类能力而来找你？',
    opts: [
      { t: '因为你做出的分析总是稳、准、边界清楚', d: { stats: 3, bayes: 1, applied_stats: 1 } },
      { t: '因为你总能把不确定性说清楚，不会把话说满', d: { bayes: 3, stats: 1, econom: 1 } },
      { t: '因为你把数据底座和生产流程做得很可靠', d: { ds_eng: 3, mlops: 1, data_qual: 1 } },
      { t: '因为你能把数据方法真正嵌进复杂行业问题里', d: { domain_ds: 2, industrial_ds: 1, health_ds: 1, econom: 1 } }
    ]
  },
  {
    id: 's3_ds_11',
    phase: 'deep',
    cat: 'DS 深挖 / 研究素材',
    triggerDirs: ['ts_anal', 'causal', 'data_qual', 'bayes'],
    text: '如果未来一年都围着一种“数据材料”打磨，你更想一直看哪种？',
    opts: [
      { t: '连续时间数据，想从变化里更早发现信号', d: { ts_anal: 3, predictive_modeling: 1, bayes: 1 } },
      { t: '前后对比或实验数据，想判断动作是否真的产生了作用', d: { causal: 3, econom: 1, stats: 1 } },
      { t: '口径复杂、质量不稳的数据，想先把底层打磨扎实', d: { data_qual: 3, ds_eng: 1, mlops: 1 } },
      { t: '噪声大、信息不全的数据，想把不确定性刻画清楚', d: { bayes: 3, stats: 1, uq: 1 } }
    ]
  },
  {
    id: 's3_ds_12',
    phase: 'deep',
    cat: 'DS 深挖 / 决策距离',
    triggerDirs: ['decision_analytics', 'econom', 'data_pipelines', 'mlops'],
    text: '你更想让自己的数据工作离最终决策有多近？',
    opts: [
      { t: '非常近，最好每次分析都能直接改变下一步动作', d: { decision_analytics: 3, business_intel: 1, domain_ds: 1 } },
      { t: '偏证据层，先把识别和评估做扎实，再支持别人判断', d: { econom: 3, causal: 1, stats: 1 } },
      { t: '偏底座层，只要数据链路稳，很多好决策自然会发生', d: { data_pipelines: 3, data_qual: 1, mlops: 1 } },
      { t: '偏生产层，把模型、监控和实验接进持续运行的流程里', d: { mlops: 3, ds_eng: 1, data_pipelines: 1 } }
    ]
  },
  {
    id: 's3_ds_13',
    phase: 'deep',
    cat: 'DS 深挖 / 统计与建模细分',
    triggerDirs: ['stats', 'bayes', 'predictive_modeling', 'stat_modeling'],
    text: '如果你长期做模型与判断，更想把哪类能力做成自己的主标签？',
    opts: [
      { t: '把经典统计推断、显著性和估计边界讲得很扎实', d: { stats: 4, applied_stats: 1, stat_modeling: 1 } },
      { t: '把先验、不确定性和后验更新做得更自然、更稳', d: { bayes: 4, probability: 1, stats: 1 } },
      { t: '把预测问题做得更准，长期围绕风险、需求或行为变化建模', d: { predictive_modeling: 4, ts_anal: 1, stat_modeling: 1 } },
      { t: '把结构化统计模型做深，让解释、泛化和诊断都更清楚', d: { stat_modeling: 4, stats: 1, applied_stats: 1 } }
    ]
  },
  {
    id: 's3_ds_14',
    phase: 'deep',
    cat: 'DS 深挖 / 生产与场景细分',
    triggerDirs: ['data_pipelines', 'mlops', 'domain_ds', 'industrial_ds'],
    text: '如果你更在意数据方法最后怎么在真实系统里长期跑着，最想一直做哪类事？',
    opts: [
      { t: '把数据管道、加工任务和交付节奏做成稳健底座', d: { data_pipelines: 4, ds_eng: 1, data_warehouse: 1 } },
      { t: '把模型上线、监控、实验和回滚做成可以持续演进的流程', d: { mlops: 4, ds_eng: 1, experimentation: 1 } },
      { t: '把数据方法真正嵌进医疗、金融、城市或产业场景里', d: { domain_ds: 4, health_ds: 1, financial_ds: 1 } },
      { t: '把工业、制造和运营这类复杂现场数据做成稳定可用的决策材料', d: { industrial_ds: 4, domain_ds: 1, decision_analytics: 1 } }
    ]
  },
  {
    id: 's3_ds_branch_01',
    phase: 'deep',
    cat: 'DS 深挖 / 必问分叉',
    mustBranch: true,
    branchOrder: 1,
    text: '真要在 DS / Statistics 这边久待，你更想把哪类数据能力做成主线？',
    opts: [
      { t: '统计推断与贝叶斯判断，重点是结论够不够稳、边界够不够清楚', d: { stats: 2, bayes: 2, applied_stats: 1, stat_modeling: 1 } },
      { t: '预测、时间序列和建模，重点是未来会怎样变化', d: { predictive_modeling: 2, ts_anal: 2, stat_modeling: 2, stats: 1 } },
      { t: '因果、实验和决策评估，重点是某个动作到底有没有用', d: { causal: 2, experimentation: 2, econom: 2, decision_analytics: 1 } },
      { t: '数据工程和底层治理，重点是数据链路先得可靠', d: { ds_eng: 2, data_pipelines: 2, data_qual: 2, data_warehouse: 1 } },
      { t: 'MLOps 和生产分析，重点是模型和分析怎样持续在线运行', d: { mlops: 2, experimentation: 1, business_intel: 1, data_pipelines: 1 } },
      { t: '行业数据科学，重点是把方法放进医疗、金融、制造或城市问题里', d: { domain_ds: 2, industrial_ds: 1, health_ds: 1, financial_ds: 1, mobility_ds: 1 } }
    ]
  },
  {
    id: 's3_ds_branch_02',
    phase: 'deep',
    cat: 'DS 深挖 / 必问分叉',
    mustBranch: true,
    branchOrder: 2,
    text: '如果以后别人想请你一起做数据类项目，你最希望他们先想到你擅长哪一类问题？',
    opts: [
      { t: '把随机性、不确定性和证据强度说清楚，结论既稳又可解释', d: { stats: 2, bayes: 2, applied_stats: 1, stat_modeling: 1 } },
      { t: '把未来变化预测准，让趋势、风险和波动更早被看见', d: { predictive_modeling: 2, ts_anal: 2, risk_modeling: 1, stat_modeling: 1 } },
      { t: '判断某个动作、策略或政策到底有没有真正起作用', d: { causal: 2, experimentation: 2, econom: 2, decision_analytics: 1 } },
      { t: '把脏乱复杂的数据链路理顺，让团队始终拿到可信的数据底座', d: { ds_eng: 2, data_pipelines: 2, data_qual: 2, data_warehouse: 1 } },
      { t: '把模型、监控、实验记录和上线流程做成可持续运转的体系', d: { mlops: 2, ds_eng: 1, experimentation: 1, data_pipelines: 1, business_intel: 1 } },
      { t: '把统计和建模方法真正嵌进具体行业场景，解决有上下文的问题', d: { domain_ds: 2, industrial_ds: 1, health_ds: 1, financial_ds: 1, mobility_ds: 1, env_ds: 1 } }
    ]
  },
  {
    id: 's3_ds_branch_03',
    phase: 'deep',
    cat: 'DS 深挖 / 必问分叉',
    mustBranch: true,
    branchOrder: 3,
    text: '如果你未来几年只能把一种 DS 能力做成主标签，你更希望别人先因为哪类事来找你？',
    opts: [
      { t: '因为你能把不确定性、概率和证据强弱讲清楚', d: { bayes: 2, stats: 2, probability: 1, stat_modeling: 1 } },
      { t: '因为你能把预测、时间变化和风险判断做得很稳', d: { predictive_modeling: 2, ts_anal: 2, risk_modeling: 1, stat_modeling: 1 } },
      { t: '因为你能判断一项动作、策略或实验到底有没有真实效果', d: { causal: 2, experimentation: 2, econom: 2, decision_analytics: 1 } },
      { t: '因为你能把数据管道、质量规则和仓储底座长期打磨扎实', d: { data_pipelines: 2, data_warehouse: 2, data_qual: 2, ds_eng: 1 } },
      { t: '因为你能把模型、监控、实验和线上流程做成稳定体系', d: { mlops: 2, ds_eng: 1, experimentation: 1, business_intel: 1, data_pipelines: 1 } },
      { t: '因为你能把方法真正嵌进医疗、金融、制造、城市等具体行业', d: { domain_ds: 2, industrial_ds: 1, health_ds: 1, financial_ds: 1, mobility_ds: 1, env_ds: 1 } }
    ]
  }
];
