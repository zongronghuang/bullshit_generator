
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

function generateBullshit(jobName) {
  const job = {
    engineer: '工程師',
    designer: '設計師',
    entrepreneur: '創業家'
  }

  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code', '調個 app 效能', '用新框架'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計', '做幾個 icon'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢', '開會做決策']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常', '是本份']

  // 如果沒有勾選任何選項而送出，傳回提示訊息
  if (!jobName) {
    return '請選擇一個選項!'
  }

  // 如果有勾選選項，就依傳回的物件資料，做出 expression
  const selectedJob = job[jobName]
  const selectedTask = task[jobName][getRandomIndex(task[jobName])]
  const selectedPhrase = phrase[getRandomIndex(phrase)]

  return '身為一個' + selectedJob + selectedTask + selectedPhrase + '吧!'
}

module.exports = generateBullshit


