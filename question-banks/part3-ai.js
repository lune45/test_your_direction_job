window.STAGE3_BANKS = window.STAGE3_BANKS || {};

window.STAGE3_BANKS.ai = [
  {
    id: 's3_ai_01',
    phase: 'deep',
    cat: 'AI 深挖 / 研究方向',
    triggerDirs: ['foundation', 'llm', 'multimodal', 'generative'],
    text: '真要在 AI 这边久待，你最想把哪类问题一直做出自己的判断？',
    opts: [
      { t: '做更通用的基础模型，让很多下游任务都从中受益', d: { foundation: 4, scaling: 1, transfer: 1 } },
      { t: '做语言智能，让系统更会理解、推理和对话', d: { llm: 4, nlp: 1, ir: 1 } },
      { t: '做多模态，让文字、图像、语音一起协同工作', d: { multimodal: 4, vlm: 2, multimodal_reasoning: 1 } },
      { t: '做生成式内容，让图像、视频或创作工具真正可用', d: { generative: 4, diffusion: 2, creative_ai: 1 } }
    ]
  },
  {
    id: 's3_ai_02',
    phase: 'deep',
    cat: 'AI 深挖 / 学习范式',
    triggerDirs: ['stat_learn', 'repr', 'ssl', 'transfer'],
    text: '说到“模型到底怎么会越来越强”，你最想把时间花在哪一类追问上？',
    opts: [
      { t: '它为什么能泛化，边界到底在哪里', d: { stat_learn: 3, scaling: 2, prob_ml: 1 } },
      { t: '怎样学到更好的内部表示，让后续任务更轻松', d: { repr: 3, stat_learn: 1, transfer: 1 } },
      { t: '没有很多标注时，怎样靠数据本身学到东西', d: { ssl: 3, repr: 2, transfer: 1 } },
      { t: '模型怎样更容易迁到新场景，不用每次重来', d: { transfer: 3, meta_learning: 1, prob_ml: 1 } }
    ]
  },
  {
    id: 's3_ai_03',
    phase: 'deep',
    cat: 'AI 深挖 / 视觉与世界理解',
    triggerDirs: ['cv', 'visual_understanding', 'video', 'vision3d', 'med_vision'],
    text: '真往视觉这边深走，你更愿意长期琢磨哪种难点？',
    opts: [
      { t: '让系统更稳地看懂图片里的目标、关系和细节', d: { cv: 3, vlm: 1, applied_ai: 1 } },
      { t: '让系统理解连续视频里的事件、动作和因果链', d: { video: 3, multimodal: 1, cv: 1 } },
      { t: '让系统从图像恢复空间结构和三维世界', d: { vision3d: 3, cv: 1, generative: 1 } },
      { t: '让模型在医疗影像里给出更可靠的辅助判断', d: { med_vision: 3, cv: 1, domain_ds: 1 } }
    ]
  },
  {
    id: 's3_ai_04',
    phase: 'deep',
    cat: 'AI 深挖 / 决策与智能体',
    triggerDirs: ['rl', 'offline_rl', 'multiagent', 'planning_ai'],
    text: '如果你对“系统自己拿主意”这件事上头，最想顺着哪条线往下走？',
    opts: [
      { t: '通过试错学策略，让系统自己找到更优动作', d: { rl: 3, planning_ai: 1, embodied: 1 } },
      { t: '先从历史数据里学，尽量减少昂贵的在线试错', d: { offline_rl: 3, rl: 1, causal: 1 } },
      { t: '研究很多智能体一起合作、竞争时会发生什么', d: { multiagent: 3, rl: 1, game_th: 1 } },
      { t: '让系统会规划、拆任务、按步骤完成复杂目标', d: { planning_ai: 3, rl: 1, multiagent: 1 } }
    ]
  },
  {
    id: 's3_ai_05',
    phase: 'deep',
    cat: 'AI 深挖 / 效率与部署',
    triggerDirs: ['training_eff', 'model_compression', 'quant', 'inf_opt'],
    text: '如果你更在意“能力最后怎么变成真能用的东西”，你会一直追哪类问题？',
    opts: [
      { t: '把训练过程做快做稳，让大模型训练不再动不动失控', d: { training_eff: 3, efficient: 1, inf_opt: 1 } },
      { t: '把模型压小、蒸馏或裁剪，在少掉能力的前提下降成本', d: { model_compression: 3, distillation: 1, efficient: 1 } },
      { t: '做量化和低比特部署，在边缘或受限环境里也能跑', d: { quant: 3, model_compression: 1, inf_opt: 1 } },
      { t: '把推理链路做快做稳，让延迟、吞吐和成本都更好', d: { inf_opt: 3, efficient: 1, applied_ai: 1 } }
    ]
  },
  {
    id: 's3_ai_06',
    phase: 'deep',
    cat: 'AI 深挖 / 语言与信息',
    triggerDirs: ['nlp', 'ir', 'recsys', 'speech'],
    text: '真留在语言和信息这边，你最想一直做哪种问题？',
    opts: [
      { t: '理解文本、抽取结构、让语言信息更可计算', d: { nlp: 3, doc_intel: 1, speech: 1 } },
      { t: '让系统更会找信息、更懂用户真正想问什么', d: { ir: 3, search_ranking: 1, recsys: 1 } },
      { t: '让系统更懂用户兴趣和长期偏好，分发更合适的内容', d: { recsys: 3, ir: 1, applied_ai: 1 } },
      { t: '让机器更好处理语音、音频和自然说话场景', d: { speech: 3, nlp: 1, multimodal: 1 } }
    ]
  },
  {
    id: 's3_ai_07',
    phase: 'deep',
    cat: 'AI 深挖 / 可信与治理',
    triggerDirs: ['safety', 'xai', 'fairness', 'prob_ml'],
    text: '如果你最在意“这模型到底靠不靠谱”，你会长期盯哪类研究？',
    opts: [
      { t: '把高风险场景里的越界、失控和诱导先挡在前面', d: { safety: 4, xai: 1, prob_ml: 1 } },
      { t: '让人能追溯模型为什么这样判断、到底看见了什么证据', d: { xai: 4, med_vision: 1, visual_understanding: 1 } },
      { t: '让系统对不同群体更公平，减少结构性偏差和不公结果', d: { fairness: 4, applied_ai: 1, xai: 1 } },
      { t: '把不确定性也建进模型里，知道什么时候该更谨慎', d: { prob_ml: 4, bayes_ml: 2 } }
    ]
  },
  {
    id: 's3_ai_08',
    phase: 'deep',
    cat: 'AI 深挖 / 数据与评测',
    triggerDirs: ['applied_ai', 'safety', 'xai', 'foundation'],
    text: '如果你更相信数据和评测设计会直接抬高上限，你最想做哪类题？',
    opts: [
      { t: '设计更能看出真实能力差异的评测体系', d: { xai: 3, safety: 1, applied_ai: 1 } },
      { t: '把训练数据和后训练数据组织得更高质量、更少偏差', d: { foundation: 2, fairness: 1, applied_ai: 1 } },
      { t: '研究数据变化和分布偏移怎样影响模型上线表现', d: { transfer: 3, applied_ai: 1, prob_ml: 1 } },
      { t: '让模型评测更贴近真实工作流，而不是只刷 benchmark', d: { applied_ai: 3, xai: 1 } }
    ]
  },
  {
    id: 's3_ai_09',
    phase: 'deep',
    cat: 'AI 深挖 / 模型对齐与行为',
    triggerDirs: ['controllable_gen', 'xai', 'planning_ai', 'transfer'],
    text: '如果你最在意模型最后会表现成什么样，你最想长期盯哪类问题？',
    opts: [
      { t: '让模型按约束稳定行事，不要一聪明就开始“乱发挥”', d: { controllable_gen: 4, llm: 1, autoregressive: 1 } },
      { t: '让模型在长任务里保持稳定规划和执行能力', d: { planning_ai: 4, rl: 1, multiagent: 1 } },
      { t: '让模型换了任务也别一下就露馅', d: { transfer: 4, meta_learning: 1, prob_ml: 1 } },
      { t: '让模型输出更可解释、更容易被人信任和修正', d: { xai: 4, applied_ai: 1, fairness: 1 } }
    ]
  },
  {
    id: 's3_ai_10',
    phase: 'deep',
    cat: 'AI 深挖 / 行业落地',
    triggerDirs: ['applied_ai', 'multimodal', 'doc_intel', 'speech'],
    text: '如果你更看重“AI 最后在哪儿真能一直有用”，你最想把哪条线做长？',
    opts: [
      { t: '企业文档、知识和工作流自动化', d: { doc_intel: 3, applied_ai: 1, vlm: 1 } },
      { t: '语音、对话和自然交互系统', d: { speech: 3, nlp: 1, multimodal: 1 } },
      { t: '图文协同、视觉搜索和多模态助手', d: { multimodal: 3, vlm: 2, doc_intel: 1 } },
      { t: '行业场景里真正能省钱省人的 AI 应用系统', d: { applied_ai: 3, llm: 1, efficient: 1 } }
    ]
  },
  {
    id: 's3_ai_11',
    phase: 'deep',
    cat: 'AI 深挖 / 学习机制',
    triggerDirs: ['meta_learning', 'prob_ml', 'bayes_ml', 'training_eff'],
    text: '如果你更想搞明白模型为什么学得快、学得稳，你最想一直啃哪类问题？',
    opts: [
      { t: '让模型在新任务上用更少样本就能快速适应', d: { meta_learning: 3, transfer: 1, prob_ml: 1 } },
      { t: '把不确定性也建进模型里，知道什么时候该更谨慎', d: { prob_ml: 3, bayes_ml: 2, safety: 1 } },
      { t: '把先验知识和数据更新放在一起，让判断跟着证据慢慢收紧', d: { bayes_ml: 3, prob_ml: 1, applied_ai: 1 } },
      { t: '把训练过程做顺，别一大起来就慢、贵、还不稳定', d: { training_eff: 3, efficient: 1, inf_opt: 1 } }
    ]
  },
  {
    id: 's3_ai_12',
    phase: 'deep',
    cat: 'AI 深挖 / 内容与对齐',
    triggerDirs: ['search_ranking', 'visual_understanding', 'audio_visual', 'controllable_gen'],
    text: '如果你更在意模型怎么和真实内容世界对上，你最想一直做哪类题？',
    opts: [
      { t: '让系统真正看懂图像里的关系、事件和上下文', d: { visual_understanding: 3, cv: 1, vlm: 1 } },
      { t: '让搜索和排序更懂用户真正想找什么、想看什么', d: { search_ranking: 3, ir: 1, recsys: 1 } },
      { t: '让声音和画面一起被理解，不丢掉跨模态线索', d: { audio_visual: 3, multimodal: 1, speech: 1 } },
      { t: '让生成结果按约束稳定输出，而不是只会“随机发挥”', d: { controllable_gen: 3, diffusion: 1, llm: 1 } }
    ]
  },
  {
    id: 's3_ai_13',
    phase: 'deep',
    cat: 'AI 深挖 / 信息系统分化',
    triggerDirs: ['nlp', 'ir', 'recsys', 'doc_intel'],
    text: '真要一直待在语言与信息系统这侧，你最想把哪类能力做成代表作？',
    opts: [
      { t: '把长文本、术语和结构化信息真正读明白', d: { nlp: 3, doc_intel: 1, ir: 1 } },
      { t: '把检索和排序做得更聪明，用户一搜就能拿到真正想要的结果', d: { ir: 2, search_ranking: 2, nlp: 1 } },
      { t: '把推荐和个性化做得更懂人，长期越用越贴近兴趣', d: { recsys: 3, search_ranking: 1, applied_ai: 1 } },
      { t: '把票据、表格、报告、知识库这类复杂文档真正变成可调用能力', d: { doc_intel: 3, nlp: 1, vlm: 1 } }
    ]
  },
  {
    id: 's3_ai_14',
    phase: 'deep',
    cat: 'AI 深挖 / 多模态分化',
    triggerDirs: ['vlm', 'multimodal_reasoning', 'audio_visual', 'doc_intel'],
    text: '如果你长期做多模态，最想先把哪一块做成熟？',
    opts: [
      { t: '让图和字真正一起工作，既能看懂图片也能读懂上下文', d: { vlm: 3, multimodal_reasoning: 1, visual_understanding: 1 } },
      { t: '让系统在多步推理里把不同模态的信息真正串起来', d: { multimodal_reasoning: 3, vlm: 1, planning_ai: 1 } },
      { t: '让声音、画面和事件线索被一起理解，而不是各说各话', d: { audio_visual: 3, speech: 1, visual_understanding: 1 } },
      { t: '把复杂图文文档、报表和工作流做成真正可落地的能力', d: { doc_intel: 3, vlm: 1, applied_ai: 1 } }
    ]
  },
  {
    id: 's3_ai_15',
    phase: 'deep',
    cat: 'AI 深挖 / 训练与部署细化',
    triggerDirs: ['training_eff', 'model_compression', 'quant', 'inf_opt'],
    text: '如果你想把“模型能跑起来”这件事做深，最想长期攻哪类瓶颈？',
    opts: [
      { t: '训练一大起来就变慢、变贵、变不稳定，想把训练过程真正做顺', d: { training_eff: 3, inf_opt: 1, foundation: 1 } },
      { t: '模型太大太重，想在尽量不掉能力的前提下把它压小', d: { model_compression: 3, distillation: 1, quant: 1 } },
      { t: '想把量化和低比特部署做到实用，不是一压就坏', d: { quant: 3, model_compression: 1, inf_opt: 1 } },
      { t: '想把推理链路做快做稳，真正解决延迟、吞吐和成本', d: { inf_opt: 3, efficient: 1, applied_ai: 1 } }
    ]
  },
  {
    id: 's3_ai_16',
    phase: 'deep',
    cat: 'AI 深挖 / 学习机制细分',
    triggerDirs: ['repr', 'ssl', 'transfer', 'meta_learning'],
    text: '如果你特别着迷“模型到底是怎么学会东西的”，最想把哪一类一直做深？',
    opts: [
      { t: '把内部表示学得更好，让后续任务都更轻松', d: { repr: 4, ssl: 1, transfer: 1 } },
      { t: '在没有很多标注时，靠数据本身把规律挖出来', d: { ssl: 4, repr: 1, transfer: 1 } },
      { t: '让模型迁到新任务、新领域时少花代价、少重来一遍', d: { transfer: 4, meta_learning: 1, prob_ml: 1 } },
      { t: '让模型一碰到新任务就能更快抓到门道', d: { meta_learning: 4, transfer: 1, repr: 1 } }
    ]
  },
  {
    id: 's3_ai_17',
    phase: 'deep',
    cat: 'AI 深挖 / 理论与统计细分',
    triggerDirs: ['stat_learn', 'opt_ml', 'scaling', 'bayes_ml'],
    text: '如果你更偏理论和统计，这里面哪类问题最值得你一直啃？',
    opts: [
      { t: '模型为什么能泛化，什么时候会失效，边界到底在哪里', d: { stat_learn: 4, ml_theory: 1, scaling: 1 } },
      { t: '训练目标、优化路径和收敛性质怎样彼此牵制', d: { opt_ml: 4, stat_learn: 1, ml_theory: 1 } },
      { t: '模型、数据和规模一起变大时，能力为什么会跳变', d: { scaling: 4, foundation: 1, stat_learn: 1 } },
      { t: '先验、不确定性和数据更新怎样一起把判断越收越准', d: { bayes_ml: 4, prob_ml: 2 } }
    ]
  },
  {
    id: 's3_ai_18',
    phase: 'deep',
    cat: 'AI 深挖 / 生成路线细分',
    triggerDirs: ['generative', 'diffusion', 'autoregressive', 'creative_ai'],
    text: '如果你最后留在生成式这边，最想把哪条路一直做透？',
    opts: [
      { t: '围绕生成模型本身的能力边界和训练范式持续推进', d: { generative: 4, foundation: 1, controllable_gen: 1 } },
      { t: '把扩散模型在图像、视频等内容生成里做得更细更听话', d: { diffusion: 4, image_generation: 1, controllable_gen: 1 } },
      { t: '把序列生成和自回归路线做得更能打，也更收得住', d: { autoregressive: 4, llm: 1, controllable_gen: 1 } },
      { t: '把创作工具、内容工作流和人机协作做得真正好用', d: { creative_ai: 4, content_gen: 1, applied_ai: 1 } }
    ]
  },
  {
    id: 's3_ai_19',
    phase: 'deep',
    cat: 'AI 深挖 / 可信系统细分',
    triggerDirs: ['safety', 'xai', 'fairness', 'prob_ml'],
    text: '如果你长期做可信 AI，更想把哪一层做成自己的招牌？',
    opts: [
      { t: '把红队、越狱、失控和高风险 failure case 提前拦住', d: { safety: 4, xai: 1, fairness: 1 } },
      { t: '把模型的证据链、归因方式和决策过程讲清楚', d: { xai: 4, visual_understanding: 1, applied_ai: 1 } },
      { t: '把偏差、公平性和不同群体的结果差异长期管住', d: { fairness: 4, applied_ai: 1, xai: 1 } },
      { t: '把概率、先验和置信度真正纳入模型判断，而不是只给一个答案', d: { prob_ml: 4, bayes_ml: 2 } }
    ]
  },
  {
    id: 's3_ai_20',
    phase: 'deep',
    cat: 'AI 深挖 / 多模态与信息系统细分',
    triggerDirs: ['vlm', 'multimodal_reasoning', 'audio_visual', 'doc_intel'],
    text: '如果你长期做多模态系统，更想把哪类能力推到最强？',
    opts: [
      { t: '让图文一起工作，图片、页面和文字说明能真正彼此对上', d: { vlm: 4, multimodal: 1, doc_intel: 1 } },
      { t: '让系统在多步任务里把不同模态线索串起来做复杂判断', d: { multimodal_reasoning: 4, planning_ai: 1, vlm: 1 } },
      { t: '让声音、画面和事件流一起被理解，而不是分别处理后再硬拼', d: { audio_visual: 4, speech: 1, visual_understanding: 1 } },
      { t: '把票据、合同、表格、报告这类复杂图文文档真正做成生产能力', d: { doc_intel: 4, vlm: 1, applied_ai: 1 } }
    ]
  },
  {
    id: 's3_ai_21',
    phase: 'deep',
    cat: 'AI 深挖 / 语言与信息能力细分',
    triggerDirs: ['nlp', 'ir', 'search_ranking', 'recsys'],
    text: '如果你一直待在语言与信息系统这条线上，更想把哪类能力做成核心手艺？',
    opts: [
      { t: '把文本、术语和结构化知识吃得更透，后面也更好调用', d: { nlp: 4, doc_intel: 1, ir: 1 } },
      { t: '把检索系统做得更准，用户一搜就更接近真正想要的内容', d: { ir: 4, search_ranking: 1, nlp: 1 } },
      { t: '把排序逻辑做得更聪明，结果的先后顺序更像“真正懂需求”', d: { search_ranking: 4, ir: 1, recsys: 1 } },
      { t: '把推荐和个性化长期做深，让系统更懂人和场景变化', d: { recsys: 4, search_ranking: 1, applied_ai: 1 } }
    ]
  },
  {
    id: 's3_ai_22',
    phase: 'deep',
    cat: 'AI 深挖 / 视觉内容路线细分',
    triggerDirs: ['cv', 'visual_understanding', 'video', 'vision3d', 'med_vision', 'image_generation', 'content_gen'],
    text: '如果你长期做视觉内容和世界表示，更想把哪条线做成自己的代表作？',
    opts: [
      { t: '让系统理解连续视频里的事件、动作和时间线，而不是只看单帧', d: { video: 4, visual_understanding: 1 } },
      { t: '让系统恢复三维结构、空间关系和真实世界几何', d: { vision3d: 4, cv: 1, multimodal_reasoning: 1 } },
      { t: '把图像或视频生成做得更细，也更听指令', d: { image_generation: 4, diffusion: 1, controllable_gen: 1 } },
      { t: '把内容生成真正接进工作流，让创作、改写和生产提效', d: { content_gen: 4, creative_ai: 1, applied_ai: 1 } }
    ]
  },
  {
    id: 's3_ai_23',
    phase: 'deep',
    cat: 'AI 深挖 / 决策学习路线细分',
    triggerDirs: ['rl', 'offline_rl', 'imitation', 'multiagent', 'decision_uncertainty'],
    text: '如果你长期做“系统怎么做决定”，更想把哪种学习路径一直做深？',
    opts: [
      { t: '让系统靠试错学到更优策略，长期自己把动作做对', d: { rl: 4, planning_ai: 1, multiagent: 1 } },
      { t: '尽量利用历史数据学习策略，少依赖昂贵又危险的在线试错', d: { offline_rl: 4, rl: 1, decision_uncertainty: 1 } },
      { t: '让系统先学会模仿专家和示范，再逐步形成自己的能力', d: { imitation: 4, offline_rl: 1, embodied: 1 } },
      { t: '在不确定、风险和信息不完整的环境里依然做出稳妥决策', d: { decision_uncertainty: 4, prob_ml: 1, planning_ai: 1 } }
    ]
  },
  {
    id: 's3_ai_24',
    phase: 'deep',
    cat: 'AI 深挖 / 视觉理解细分',
    triggerDirs: ['cv', 'visual_understanding', 'med_vision', 'video'],
    text: '如果你长期做“系统怎么理解世界”，更想把哪类能力做成自己的代表作？',
    opts: [
      { t: '把目标、区域和结构识别做得更准，让系统先把画面里的东西看对', d: { cv: 4, visual_understanding: 1, med_vision: 1 } },
      { t: '把关系、上下文和场景含义看懂，不只知道“有什么”，还知道“发生了什么”', d: { visual_understanding: 4, cv: 1, video: 1 } },
      { t: '把医学影像里的异常、风险和辅助判断做得更能让人放心', d: { med_vision: 4, visual_understanding: 1, xai: 1 } },
      { t: '把连续视频里的动作、事件和变化过程真正看明白', d: { video: 4, visual_understanding: 1 } }
    ]
  },
  {
    id: 's3_ai_25',
    phase: 'deep',
    cat: 'AI 深挖 / 多主体与协同决策细分',
    triggerDirs: ['multiagent', 'planning_ai', 'offline_rl', 'decision_uncertainty'],
    text: '如果你长期研究“很多决策单元怎么一起行动”，更想一直做哪类问题？',
    opts: [
      { t: '研究多个智能体怎样协作、博弈和形成稳定策略', d: { multiagent: 4, rl: 1, game_th: 1 } },
      { t: '让系统先会规划和拆解，再把复杂任务按步骤做完', d: { planning_ai: 4, rl: 1, multiagent: 1 } },
      { t: '让系统更多从历史经验里学，少依赖昂贵的在线试错', d: { offline_rl: 4, decision_uncertainty: 1, imitation: 1 } },
      { t: '在信息不全、风险又高的时候，动作也别一下选冒了', d: { decision_uncertainty: 4, prob_ml: 1, planning_ai: 1 } }
    ]
  },
  {
    id: 's3_ai_26',
    phase: 'deep',
    cat: 'AI 深挖 / 压缩与高效化细分',
    triggerDirs: ['model_compression', 'distillation', 'quant', 'training_eff'],
    text: '如果你长期做“模型怎么更省、更稳、更好落地”，更想把哪类能力做成强项？',
    opts: [
      { t: '在尽量不掉能力的前提下，把模型压小、裁剪和重构', d: { model_compression: 4, distillation: 1, quant: 1 } },
      { t: '把大模型知识稳定迁到小模型里，让轻量版本真正可用', d: { distillation: 4, model_compression: 1, transfer: 1 } },
      { t: '把量化和低比特部署做实，不是一压就坏、一省就崩', d: { quant: 4, model_compression: 1, inf_opt: 1 } },
      { t: '让训练过程本身更高效、更稳定、更能扛规模', d: { training_eff: 4, inf_opt: 1 } }
    ]
  },
  {
    id: 's3_ai_27',
    phase: 'deep',
    cat: 'AI 深挖 / 理论与能力边界细分',
    triggerDirs: ['ml_theory', 'stat_learn', 'opt_ml', 'scaling'],
    text: '如果你长期追“模型能力为什么会冒出来、又会在哪儿失灵”，更想把哪类问题做成主线？',
    opts: [
      { t: '从更抽象的角度解释学习过程本身，到底哪些机制最关键', d: { ml_theory: 4, stat_learn: 1, opt_ml: 1 } },
      { t: '把泛化、样本复杂度和理论边界讲清楚，不只停在经验上', d: { stat_learn: 4, ml_theory: 1, scaling: 1 } },
      { t: '把训练目标、优化路径和收敛行为之间的关系真正研究透', d: { opt_ml: 4, stat_learn: 1, training_eff: 1 } },
      { t: '研究模型为什么一大起来会突然出现新能力，以及这种规律能不能预测', d: { scaling: 4, foundation: 1, ml_theory: 1 } }
    ]
  },
  {
    id: 's3_ai_28',
    phase: 'deep',
    cat: 'AI 深挖 / 语言模型路线细分',
    triggerDirs: ['llm', 'nlp', 'ir', 'search_ranking'],
    text: '如果你长期留在语言与检索这一侧，更想把哪类能力做成代表作？',
    opts: [
      { t: '把大语言模型本身做得更会推理，也更像能长期托底的通用能力', d: { llm: 4, foundation: 1, nlp: 1 } },
      { t: '把文本理解、结构抽取和长文处理做得更扎实', d: { nlp: 4, doc_intel: 1, llm: 1 } },
      { t: '把检索链路做得更准，让系统真正找到需要的知识', d: { ir: 4, search_ranking: 1, nlp: 1 } },
      { t: '把排序逻辑做得更聪明，让结果顺序更贴近真实需求', d: { search_ranking: 4, ir: 1, recsys: 1 } }
    ]
  },
  {
    id: 's3_ai_29',
    phase: 'deep',
    cat: 'AI 深挖 / 可信能力分解',
    triggerDirs: ['safety', 'xai', 'fairness', 'prob_ml'],
    text: '如果你长期做可信 AI，更想把哪种能力做到别人很难替代？',
    opts: [
      { t: '提前发现高风险失败模式、越狱和危险行为，让系统更难失控', d: { safety: 4, controllable_gen: 1, llm: 1 } },
      { t: '把模型为什么这样判断讲清楚，让人能追溯、核查和修正', d: { xai: 4, visual_understanding: 1, med_vision: 1 } },
      { t: '把偏差、公平性和不同群体受影响方式做成可评估、可改进的体系', d: { fairness: 4, xai: 1, applied_ai: 1 } },
      { t: '把不确定性也纳入建模，让系统知道什么时候该保守、什么时候能更自信', d: { prob_ml: 4, bayes_ml: 2 } }
    ]
  },
  {
    id: 's3_ai_branch_01',
    phase: 'deep',
    cat: 'AI 深挖 / 必问分叉',
    mustBranch: true,
    branchOrder: 1,
    text: '真要确定在 AI 里长期走下去，你最想把哪类核心能力做成自己的主线？',
    opts: [
      { t: '研究模型怎么学会东西，关注表示、迁移、泛化和理论边界', d: { repr: 2, ssl: 2, transfer: 2, stat_learn: 2, ml_theory: 1 } },
      { t: '研究语言系统怎么理解、检索、推理和组织知识', d: { llm: 2, nlp: 2, ir: 2, search_ranking: 2, doc_intel: 1 } },
      { t: '研究系统怎么真正看懂图像、视频和三维世界', d: { cv: 2, visual_understanding: 2, video: 2, vision3d: 2, med_vision: 1 } },
      { t: '研究文字、图像、语音怎样一起协作，不再各管各的', d: { multimodal: 2, vlm: 2, multimodal_reasoning: 2, audio_visual: 2, doc_intel: 1 } },
      { t: '研究内容生成与创作工具，让生成结果更有表现力和可用性', d: { generative: 2, diffusion: 2, autoregressive: 2, creative_ai: 2, controllable_gen: 1 } },
      { t: '研究决策、规划和智能体，让系统更会自己做事', d: { rl: 2, offline_rl: 2, multiagent: 2, planning_ai: 2, decision_uncertainty: 1 } }
    ]
  },
  {
    id: 's3_ai_branch_02',
    phase: 'deep',
    cat: 'AI 深挖 / 必问分叉',
    mustBranch: true,
    branchOrder: 2,
    text: '如果你继续在 AI 里往深走，更想一直卡住哪一类真正拖上限的问题？',
    opts: [
      { t: '模型为什么会学会，为什么有时泛化、有时突然失效', d: { ml_theory: 2, stat_learn: 2, scaling: 2, opt_ml: 1, prob_ml: 1 } },
      { t: '模型怎样少失控、少越界，也更容易让人看懂为什么这么做', d: { safety: 2, xai: 2, fairness: 2, prob_ml: 1, bayes_ml: 1 } },
      { t: '模型怎样训得更顺、落得更快，成本也别一路飙上去', d: { training_eff: 3, inf_opt: 2, model_compression: 1, quant: 1 } },
      { t: '模型怎样真正变成工作流和产品能力，而不只是实验室效果', d: { applied_ai: 3, doc_intel: 1, recsys: 1, llm: 1 } },
      { t: '模型怎样在未知任务、新模态和新环境里继续保持适应力', d: { transfer: 2, meta_learning: 2, repr: 1, multimodal_reasoning: 1, embodied: 1 } }
    ]
  },
  {
    id: 's3_ai_branch_03',
    phase: 'deep',
    cat: 'AI 深挖 / 必问分叉',
    mustBranch: true,
    branchOrder: 3,
    text: '如果几年后别人提起你的 AI 方向，你最希望他们先想到你擅长哪类问题？',
    opts: [
      { t: '把“为什么学得会、什么时候会失效”这种底层问题讲清楚', d: { ml_theory: 2, stat_learn: 2, prob_ml: 1, bayes_ml: 1, scaling: 1 } },
      { t: '把语言理解、知识组织、检索与问答系统做得又准又稳', d: { llm: 2, nlp: 2, ir: 2, search_ranking: 1, doc_intel: 1 } },
      { t: '把图像、视频和三维世界的理解能力做成真正可靠的系统', d: { cv: 2, visual_understanding: 2, video: 2, med_vision: 1 } },
      { t: '把图文语音这些不同模态真正融合起来，形成统一能力', d: { multimodal: 2, vlm: 2, multimodal_reasoning: 2, audio_visual: 1, doc_intel: 1 } },
      { t: '把生成能力做成能落地的工具，而不是只会“生成一下”', d: { generative: 2, diffusion: 2, creative_ai: 2, content_gen: 1 } },
      { t: '把智能体、规划和长期决策做成真的能自己把事干完的系统', d: { rl: 2, planning_ai: 2, offline_rl: 1, multiagent: 1, decision_uncertainty: 2 } }
    ]
  },
  {
    id: 's3_ai_branch_04',
    phase: 'deep',
    cat: 'AI 深挖 / 必问分叉',
    mustBranch: true,
    branchOrder: 4,
    triggerDirs: ['foundation', 'repr', 'ssl', 'transfer', 'meta_learning', 'stat_learn', 'scaling', 'opt_ml', 'prob_ml', 'bayes_ml', 'training_eff', 'model_compression', 'quant', 'inf_opt'],
    text: '如果你更偏“模型为什么会学会东西”这条线，最想把哪一块做成自己的主线？',
    opts: [
      { t: '做更通用的基础模型和预训练底座，让很多任务都能从中受益', d: { foundation: 4, scaling: 1 } },
      { t: '研究更好的内部表示，让模型先把世界表示对', d: { repr: 4, ssl: 1, transfer: 1 } },
      { t: '在没有很多标注时，靠数据本身把规律学出来', d: { ssl: 4, repr: 1, transfer: 1 } },
      { t: '让模型迁到新任务和新环境时更省样本、更少重来', d: { transfer: 4, meta_learning: 1 } },
      { t: '让模型一碰到新任务就能更快抓住门道', d: { meta_learning: 4, transfer: 1, repr: 1 } },
      { t: '把泛化边界、样本复杂度和理论解释讲清楚', d: { stat_learn: 4, ml_theory: 1, scaling: 1 } },
      { t: '研究模型、数据和规模一起变大时能力为什么会跳变', d: { scaling: 4, foundation: 1, stat_learn: 1 } },
      { t: '把训练目标、优化路径和收敛行为研究透', d: { opt_ml: 4, ml_theory: 1 } },
      { t: '把不确定性和概率判断真正建进模型，而不只给一个答案', d: { prob_ml: 4, bayes_ml: 1 } },
      { t: '把先验知识和数据更新放在一起，让判断跟着证据慢慢修正', d: { bayes_ml: 4, prob_ml: 1 } },
      { t: '把训练和部署做得更顺、更省，也更扛规模', d: { training_eff: 3, inf_opt: 1, model_compression: 1, quant: 1 } }
    ]
  },
  {
    id: 's3_ai_branch_05',
    phase: 'deep',
    cat: 'AI 深挖 / 必问分叉',
    mustBranch: true,
    branchOrder: 5,
    triggerDirs: ['llm', 'nlp', 'ir', 'search_ranking', 'recsys', 'speech', 'doc_intel'],
    text: '如果你一直留在语言与信息系统这条线上，更想把哪类能力做成自己的招牌？',
    opts: [
      { t: '把大语言模型本身做强，让它更会推理、表达和完成复杂任务', d: { llm: 4, foundation: 1, nlp: 1 } },
      { t: '把文本理解、结构抽取和长文处理做得更扎实', d: { nlp: 4, doc_intel: 1, llm: 1 } },
      { t: '把检索系统做得更准，真正找到需要的知识和证据', d: { ir: 4, search_ranking: 1, nlp: 1 } },
      { t: '把排序逻辑做得更聪明，让结果先后顺序更贴近真实需求', d: { search_ranking: 4, ir: 1, recsys: 1 } },
      { t: '把推荐和个性化做深，让系统长期更懂人和场景变化', d: { recsys: 4, search_ranking: 1, applied_ai: 1 } },
      { t: '把语音、音频和自然说话场景做得更像真人交流', d: { speech: 4, nlp: 1, audio_visual: 1 } },
      { t: '把文档、票据、表格、报告这类复杂资料真正变成可调用能力', d: { doc_intel: 4, nlp: 1, vlm: 1 } }
    ]
  },
  {
    id: 's3_ai_branch_06',
    phase: 'deep',
    cat: 'AI 深挖 / 必问分叉',
    mustBranch: true,
    branchOrder: 6,
    triggerDirs: ['cv', 'visual_understanding', 'video', 'vision3d', 'med_vision', 'vlm', 'multimodal_reasoning', 'audio_visual', 'image_generation', 'creative_ai', 'content_gen', 'diffusion'],
    text: '如果你长期做“看世界、跨模态或生成”，更想先把哪类能力练到特别强？',
    opts: [
      { t: '把图片里的目标、区域和细节看准，让系统先把画面看对', d: { cv: 4, visual_understanding: 1 } },
      { t: '把场景关系、上下文和“发生了什么”真正理解清楚', d: { visual_understanding: 4, cv: 1, vlm: 1 } },
      { t: '把连续视频里的动作、事件和时间线看明白', d: { video: 4, visual_understanding: 1 } },
      { t: '把三维结构、空间关系和世界几何恢复出来', d: { vision3d: 4, cv: 1, multimodal_reasoning: 1 } },
      { t: '把医学影像里的异常、风险和辅助判断做得更能让人放心', d: { med_vision: 4, visual_understanding: 1, xai: 1 } },
      { t: '把图和字真正对齐，让系统既会看也会读', d: { vlm: 4, multimodal: 1, doc_intel: 1 } },
      { t: '把不同模态线索串起来做复杂推理，而不是各看各的', d: { multimodal_reasoning: 4, multimodal: 1, planning_ai: 1 } },
      { t: '把声音和画面一起理解，不丢掉跨模态线索', d: { audio_visual: 4, speech: 1, video: 1 } },
      { t: '把图像或视频生成本身做强，让结果更细，也更听指令', d: { image_generation: 4, diffusion: 1 } },
      { t: '把创作工作流做成真正可用的产品能力，而不只是“生成一下”', d: { creative_ai: 2, content_gen: 2, controllable_gen: 1 } }
    ]
  },
  {
    id: 's3_ai_branch_07',
    phase: 'deep',
    cat: 'AI 深挖 / 必问分叉',
    mustBranch: true,
    branchOrder: 7,
    triggerDirs: ['safety', 'xai', 'fairness', 'decision_uncertainty', 'imitation', 'offline_rl', 'planning_ai', 'multiagent', 'distillation', 'training_eff', 'quant', 'inf_opt', 'autoregressive', 'controllable_gen'],
    text: '如果你更在意系统最后会表现成什么样，最想把哪类能力磨成自己最稳的强项？',
    opts: [
      { t: '把高风险场景里的越界、失控和诱导先挡在前面', d: { safety: 4, controllable_gen: 1, xai: 1 } },
      { t: '让模型为什么这样判断变得可追溯、可解释、可修正', d: { xai: 4, fairness: 1, prob_ml: 1 } },
      { t: '让不同群体拿到更公平的结果，把偏差问题长期压下去', d: { fairness: 4, xai: 1, applied_ai: 1 } },
      { t: '让系统在不确定、信息不完整时也别轻易选冒', d: { decision_uncertainty: 3, prob_ml: 2, planning_ai: 1 } },
      { t: '让系统先会模仿和利用历史经验，再逐步把策略学稳', d: { imitation: 3, offline_rl: 2, planning_ai: 1 } },
      { t: '让系统更会长期规划和拆任务，按步骤把复杂目标做完', d: { planning_ai: 4, decision_uncertainty: 1, rl: 1 } },
      { t: '让多个智能体协作、博弈和形成稳定策略', d: { multiagent: 4, planning_ai: 1, rl: 1 } },
      { t: '把模型压小、裁剪和重构，尽量不掉能力地把系统做轻', d: { model_compression: 4, distillation: 1, quant: 1 } },
      { t: '把大模型知识稳定迁到小模型里，让轻量版本真正可用', d: { distillation: 4, model_compression: 1, transfer: 1 } },
      { t: '把训练过程本身做得更顺、更能扛规模', d: { training_eff: 4, inf_opt: 1 } },
      { t: '把量化和推理链路做实，让模型部署更快、更省，也更稳当', d: { quant: 2, inf_opt: 2, model_compression: 1 } },
      { t: '让生成行为本身更可控，既会续写也能按要求稳定输出', d: { controllable_gen: 4, autoregressive: 1, content_gen: 1 } }
    ]
  }
];
