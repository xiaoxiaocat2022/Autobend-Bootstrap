var list = [
  {
    id: 1,
    type: "A",
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
    jobType: "A",
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
    isFinish: false,
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
    isFinish: false,
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
    jobType: "A",
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
    jobNo: 9,
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
//var list = JSON.parse(window.localStorage.getItem('todos'))||[];
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
  //计算所有未完成的数量
  var activeNum = list.filter(function (t) {
    return !t.isFinish;
  }).length;

  box.innerHTML = template("tmp", {
    bindlist: bindlist,
    activeNum: activeNum,
    length: list.length,
    type: type,
  });
  console.log(bindlist);
  window.localStorage.setItem('todos',JSON.stringify(list));
}