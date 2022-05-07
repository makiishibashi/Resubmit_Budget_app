// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
  import { getDatabase, ref, push, set, onChildAdded, remove, onChildRemoved }
  from "https://www.gstatic.com/firebasejs/9.7.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDFlMDbKmsWFPaJpBwXPiWxy5zF9QBG7tU",
    authDomain: "assignment-a15ef.firebaseapp.com",
    databaseURL: "https://assignment-a15ef-default-rtdb.firebaseio.com",
    projectId: "assignment-a15ef",
    storageBucket: "assignment-a15ef.appspot.com",
    messagingSenderId: "956291081653",
    appId: "1:956291081653:web:463ed5b6eb1663e511a5fc"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app); //RealtimeDBに接続
  const dbRef1 = ref(db, "budget/income"); //RealtimeDB内の"chat"を使う
  const dbRef2 = ref(db, "budget/expenses"); //RealtimeDB内の"chat"を使う

//グローバル
var x2,x3
  
//Budgetに値を追加
$("#addbudget").on("click",function() {
    const budget = {
        budget: $("#budgetFirebase").val()
    }
    set(dbRef1, budget);           //"chat"にユニークKEYをつけてオブジェクトデータを登録
});

//Expenseに値を追加
$("#addExpenses").on("click",function() {
    const expenses = {
        expenses: $("#expensesFirebase").val()
    }
    set(dbRef2, expenses);           //"chat"にユニークKEYをつけてオブジェクトデータを登録
});

// /最初にデータ取得＆onSnapshotでリアルタイムにデータを取得
onChildAdded(dbRef1, function (data) {
  const budget = data.val();    //オブジェクトデータを取得し、変数msgに代入
  //表示用テキスト・HTMLを作成
  let h = '<p>';
  h += budget;
  h += '</p>';
  $("#budget").html(h); //#budgetに追加
});


// 最初にデータ取得＆onSnapshotでリアルタイムにデータを取得
onChildAdded(dbRef2, function (data) {
  const expenses = data.val();    //オブジェクトデータを取得し、変数expensesに代入
  //表示用テキスト・HTMLを作成
  let h = '<p>';
  h += expenses;
  h += '</p>';
  $("#expenses").html(h); //#expensesに追加
});

//合計を表示

// $("total").html(h) ;

//棒グラフを表示

// document.getElementById("chart").innerHTML = `<canvas id=myChart></canvas>`;
// var ctx = document.getElementById("myChart").getContext('2d');
//      var myChart = new Chart(ctx,{
//       type: 'bar',
//       data: {
//         labels: ["収入","支出"],
//         datasets: [{
//           label: '予算管理',
//           data: [x2, x3],
//           backgroundColor: [
//             'rgba(255, 99, 132, 0.2)',
//             'rgba(54, 162, 235, 0.2)',
//             'rgba(255, 206, 86, 0.2)',
//             'rgba(75, 192, 192, 0.2)',
//             'rgba(153, 102, 255, 0.2)',
//             'rgba(255, 159, 64, 0.2)'
//           ],
//           borderColor: [
//             'rgba(255, 99, 132, 1)',
//             'rgba(54, 162, 235, 1)',
//             'rgba(255, 206, 86, 1)',
//             'rgba(75, 192, 192, 1)',
//             'rgba(153, 102, 255, 1)',
//             'rgba(255, 159, 64, 1)'
//           ],
//           borderWidth: 1
//         }]
//       }
//     });
   
   

