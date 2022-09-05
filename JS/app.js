var list = [
  {
    id: 0,
    jobType: "B",
    jobNo: 0,
    customer: "Flip Farm",
    jobName: "Infeed Top Frame",
    qty: 10,
    process: "33066S",
    material: "L6P025NB27",
    materialIsReady: false,
    materialIsOrdered: false,
    mandrelIsReady: false,
    mandrelIsOrdered: false,
    isFinish: false,
    isEdit: false
  },
  {
    id: 1,
    jobType: "C",
    jobNo: 1,
    customer: "Flip Farm",
    jobName: "Infeed Top Frame",
    qty: 10,
    process: "33066S",
    material: "L6P025NB27",
    materialIsReady: false,
    materialIsOrdered: false,
    mandrelIsReady: true,
    mandrelIsOrdered: false,
    isFinish: true,
    isEdit: false
  },
  {
    id: 2,
    jobType: "A",
    jobNo: 2,
    customer: "ZWH",
    jobName: "S4076N76",
    qty: 60,
    process: "76076S",
    material: "L407616D",
    materialIsReady: true,
    materialIsOrdered: false,
    mandrelIsReady: false,
    mandrelIsOrdered: true,
    isFinish: true,
    isEdit: false
  },
  {
    id: 3,
    jobType: "A",
    jobNo: 3,
    customer: "IMG001",
    jobName: "Test Frame",
    qty: 40,
    process: "33066S",
    material: "L6P025NB27",
    materialIsReady: false,
    materialIsOrdered: false,
    mandrelIsReady: false,
    mandrelIsOrdered: false,
    isFinish: false,
    isEdit: false
  },
  {
    id: 4,
    jobType: "A",
    jobNo: 4,
    customer: "CHEN001",
    jobName: "Outfeed Top Frame",
    qty: 10,
    process: "33066S",
    material: "L6P025NB27",
    materialIsReady: false,
    materialIsOrdered: false,
    mandrelIsReady: false,
    mandrelIsOrdered: false,
    isFinish: false,
    isEdit: false
  },
  {
    id: 5,
    jobType: "A",
    jobNo: 5,
    customer: "STAY002",
    jobName: "Handle",
    qty: 10,
    process: "44044S",
    material: "L6P025NB27",
    materialIsReady: false,
    materialIsOrdered: true,
    mandrelIsReady: false,
    mandrelIsOrdered: false,
    isFinish: false,
    isEdit: false
  },
  {
    id: 6,
    jobType: "A",
    jobNo: 6,
    customer: "EHMO002",
    jobName: "Rolling Cages",
    qty: 10,
    process: "33066S",
    material: "L6P025NB27",
    materialIsReady: false,
    materialIsOrdered: false,
    mandrelIsReady: true,
    mandrelIsOrdered: false,
    isFinish: false,
    isEdit: false
  },
  {
    id: 7,
    jobType: "A",
    jobNo: 7,
    customer: "Test 7",
    jobName: "Infeed Top Frame",
    qty: 10,
    process: "33066S",
    material: "L6P025NB27",
    materialIsReady: false,
    materialIsOrdered: false,
    mandrelIsReady: false,
    mandrelIsOrdered: false,
    isFinish: false,
    isEdit: false
  },
  {
    id: 8,
    jobType: "B",
    jobNo: 8,
    customer: "Test 8",
    jobName: "Infeed Top Frame",
    qty: 10,
    process: "33066S",
    material: "L6P025NB27",
    materialIsReady: false,
    materialIsOrdered: false,
    mandrelIsReady: false,
    mandrelIsOrdered: false,
    isFinish: false,
    isEdit: false
  },
  {
    id: 9,
    jobType: "A",
    jobNo: 0,
    customer: "HAHA10",
    jobName: "What bending",
    qty: 10,
    process: "33066S",
    material: "L6P025NB27",
    materialIsReady: true,
    materialIsOrdered: false,
    mandrelIsReady: false,
    mandrelIsOrdered: false,
    isFinish: false,
    isEdit: false
  },
];


// var list = JSON.parse(window.localStorage.getItem('todos'))||[];
var type="all";
//box = container
var box = document.querySelector(".todoapp");
// box.innerHTML = template("tmp", {});
bindHtml();
// 2 Render function
function bindHtml() {
  var bindlist = list;

  switch (type) {
    case "all":
      bindlist = list;
      break;
    case "active":
      bindlist = list.filter(function (t) {
        return t.isFinish == false;
      }); //!t.isFinish
      break;
    case "completed":
      bindlist = list.filter(function (t) {
        return t.isFinish == true;
      });
  }

  // joblists for csm100 csm38 and engineering
  var aList=bindlist.filter(function (t) {return t.jobType == "A"});
  aList.sort((a,b) => a.jobNo-b.jobNo);
  aList.forEach(function (t,index) { return t.jobNo=index+1}); 

  var bList=bindlist.filter(function (t) {return t.jobType == "B"});

  var eList=bindlist.filter(function (t) {return t.jobType == "E"});



  //计算所有未完成的数量
  var activeNum = list.filter(function (t) {
    return !t.isFinish;
  }).length;
  //number of csm100 job
  var activeANum = list.filter(function (t) {
    return (!t.isFinish & t.jobType=="A");
  }).length;
  var activeBNum = list.filter(function (t) {
    return (!t.isFinish & t.jobType=="B");
  }).length;
  var activeENum = list.filter(function (t) {
    return (!t.isFinish & t.jobType=="E");
  }).length;

  let aLength = aList.length;
  let bLength = bList.length;
  let eLength = eList.length;
  

  box.innerHTML = template("tmp", {
    bindlist: bindlist,
    activeNum: activeNum,
    activeANum,
    activeBNum,
    activeENum,
    aList,
    aLength,
    bList,
    bLength,
    eList,
    eLength,
    length: list.length,
    type: type,
  });
  console.log(activeANum, aLength);
  window.localStorage.setItem('todos',JSON.stringify(list));
}
//根据地址栏哈希值改变显示
window.addEventListener("hashchange", function (e) {
  type = window.location.hash.slice(2) || "all";
  bindHtml();
});

//4 事件委托的形式添加  因为input会变化 事件绑在了container 上
box.addEventListener("keydown", function (e) {
  e = e || window.event;
  var target = e.target || e.srcElement;
  var code = e.keyCode || e.which;

  if (target.className === "new-todo" && code === 13) {
    //拿到文本框里的内容 非空验证 组装一个对象 push到数组 表单置空（inerHtml 渲染时自动，操作节点时 需要手动置kong）

    var text = target.value.trim();
    if (!text) return;
    var id = 0;
   
    if (list.length) {
      id = list[list.length - 1].id + 1;
     
    } else {
      id = 1;
    }
    list.push({ id: id, content: text, isFinish: false, isEdit: false });
    bindHtml();
  }
  //10 在编辑的文本里回车  确认编辑  如果文本为空 删除  不为空 修改
  if (target.className === "edit" && code === 13) {
    var text= target.value.trim();
    var id = target.dataset.id -0;
    if(!text){
      list=list.filter(function(item){return item.id !== id;});
    }
    else{
      var todo = list. find(function(t){return t.id===id;});
      todo.content =text;
      todo.isEdit = false;
    }
    bindHtml();
  }

  //取消编辑
  if (target.className === "edit" && code === 27){
  
    var id = target.dataset.id -0;
    var todo = list.find(function(t){return t.id===id;});
    todo.isEdit=false;
    bindHtml();

  }
    
});

//5 事件的委托形式出现点击

box.addEventListener("click", function (e) {
  e = e || window.event;
  var target = e.target || e.srcElement;
  if (target.dataset.key === "done") {
    let id = target.dataset.id - 0;
    let todo = list.find(function (t) {
      return t.id === id;
    });
    todo.isFinish = !todo.isFinish;
    bindHtml();
  }
  if (target.dataset.key === "mandrelOD") {
    let id = target.dataset.id - 0;
    let todo = list.find(function (t) {
      return t.id === id;
    });
    todo.mandrelIsOrdered = !todo.mandrelIsOrdered;
    bindHtml();
  }
  if (target.dataset.key === "mandrelRD") {
    let id = target.dataset.id - 0;
    let todo = list.find(function (t) {
      return t.id === id;
    });
    todo.mandrelIsReady = !todo.mandrelIsReady;
    bindHtml();
  }
  if (target.dataset.key === "materialRD") {
    let id = target.dataset.id - 0;
    let todo = list.find(function (t) {
      return t.id === id;
    });
    todo.materialIsReady = !todo.materialIsReady;
    bindHtml();
  }
  if (target.dataset.key === "materialOD") {
    let id = target.dataset.id - 0;
    let todo = list.find(function (t) {
      return t.id === id;
    });
    todo.materialIsOrdered = !todo.materialIsOrdered;
    bindHtml();
  }
  if (target.dataset.key === "up") {
    let id = target.dataset.id - 0;
    let todo = list.find(function (t) {
      return t.id === id;
    });
    
    list.forEach(function (t) {if(t.jobType === todo.jobType && t.jobNo===todo.jobNo-1){ t.jobNo=t.jobNo+1;return}})
      todo.jobNo = todo.jobNo-1;
    bindHtml();
  }
  if (target.dataset.key === "down") {
    let id = target.dataset.id - 0;
    let todo = list.find(function (t) {
      return t.id === id;
    });
    
    list.forEach(function (t) {if(t.jobType === todo.jobType && t.jobNo===todo.jobNo+1){ t.jobNo=t.jobNo-1;return}})
      todo.jobNo = todo.jobNo+1;
    bindHtml();
  }
  if (target.dataset.key === "del") {
    let id = target.dataset.id - 0;
    let index = list.findIndex(function (t){return t.id === id;})
    list.splice(index,1);
        bindHtml();
  }
  if (target.dataset.key === "clear-completed") {
   
   list=list.filter(t=>(t.jobType==target.dataset.type && !t.isFinish))
        bindHtml();
  }
  if (target.dataset.key === "add") {
   
    let customer= getElementById("customer").value.trim();
    .value.trim();
    jobType: "B",
    jobNo: 0,
    customer: "Flip Farm",
    jobName: "Infeed Top Frame",
    qty: 10,
    process: "33066S",
    material: "L6P025NB27",
    materialIsReady: false,
    materialIsOrdered: false,
    mandrelIsReady: false,
    mandrelIsOrdered: false,
    isFinish: false,
    isEdit: false
    if (!text) return;
    var id = 0;
   
    if (list.length) {
      id = list[list.length - 1].id + 1;
     
    } else {
      id = 1;
    }
    list.push({ id: id, content: text, isFinish: false, isEdit: false });
    bindHtml();
        
   }
});


//9 进入编辑状态 双击事件委托 

box.addEventListener("dblclick", function (e) {
  e = e || window.event;
  var target = e.target || e.srcElement;
  let originalValue=target.innerHTML;
  let inputCount=document.getElementsByClassName('active-input');
  if(inputCount.length==0 && (target.dataset.key==="customer" || target.dataset.key==="jobName" || target.dataset.key==="qty" || target.dataset.key==="process") ){
    let input=document.createElement("input");
    target.innerHTML='';
    target.appendChild(input);
    input.setAttribute("class", "active-input");
    let width=target.offsetWidth;
    console.log(width);
    //此处宽度跟着变化  不好使 需要修正
    input.setAttribute("style", "width:"+width+"px");
    input.value=originalValue;
    input.focus();
    input.onblur=function(){
      target.innerHTML=input.value;
      let id = target.dataset.id-0;
      let todo=list.find(function(t){return t.id===id});
      todo[target.dataset.key]=input.value;
      bindHtml();
    }
  }
  if(inputCount.length==0 && (target.dataset.key==="material" )){
    let input=document.createElement("input");
    target.innerHTML='';
    target.appendChild(input);
    input.setAttribute("class", "active-input");
    let index=originalValue.indexOf("<button")
    input.value=originalValue.slice(0,index).trim();
    input.focus();
    input.onblur=function(){
      target.innerHTML=input.value;
      let id = target.dataset.id-0;
      let todo=list.find(function(t){return t.id===id});
      todo[target.dataset.key]=input.value;
      bindHtml();
    }
  }

});