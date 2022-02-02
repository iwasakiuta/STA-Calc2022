//計算

function get_calc(btn) {
    if(btn.value == "=") {
      document.dentaku.display.value = eval(document.dentaku.display.value);
      output_total.textContent = digitNum(eval(document.dentaku.display.value));
    } else if (btn.value == "AC") {
      document.dentaku.display.value = "";
    } else {
      if (btn.value == "×") {
        btn.value = "*";
      } else if (btn.value == "÷") {
        btn.value = "/";
      } 
      document.dentaku.display.value += btn.value;
      document.dentaku.add_btn.value = "×";
      document.dentaku.div_btn.value = "÷";
    }
  }


//桁数制限

function digitNum(num) {
    return Math.round(num*100000000)/100000000;
  }
