// var app = getApp();

var encode = require("./encoding.js");
var jpPrinter = {
  createNew: function () {
    var jpPrinter = {};
    var data = "";
    var command = []

    jpPrinter.name = "标签模式";

    jpPrinter.init = function () { };

    jpPrinter.addCommand = function (content) {  //将指令转成数组装起
	console.log(content)
      var code = new encode.TextEncoder(
        'gb18030', {
          NONSTANDARD_allowLegacyEncoding: true
        }).encode(content)
      for (var i = 0; i < code.length; ++i) {
        command.push(code[i])
      }
    }
	
    jpPrinter.setSize = function (pageWidght, pageHeight) { //设置页面大小
      data = "SIZE " + pageWidght.toString() + " mm" + "," + pageHeight.toString() + " mm" + "\r\n";
      jpPrinter.addCommand(data)
    };

    jpPrinter.setSpeed = function (printSpeed) { //设置打印机速度
      data = "SPEED " + printSpeed.toString() + "\r\n";
      jpPrinter.addCommand(data)
    };

    jpPrinter.setDensity = function (printDensity) { //设置打印机浓度
      data = "DENSITY " + printDensity.toString() + "\r\n";
      jpPrinter.addCommand(data)
    };

    jpPrinter.setGap = function (printGap) { //传感器
      data = "GAP " + printGap.toString() + " mm\r\n";
      jpPrinter.addCommand(data)
    };

    jpPrinter.setCountry = function (country) { //选择国际字符集
      /*
      001:USA
      002:French
      003:Latin America
      034:Spanish
      039:Italian
      044:United Kingdom
      046:Swedish
      047:Norwegian
      049:German
       */
      data = "COUNTRY " + country + "\r\n";
      jpPrinter.addCommand(data)
    };

    jpPrinter.setCodepage = function (codepage) { //选择国际代码页
      /*
      8-bit codepage 字符集代表
      437:United States
      850:Multilingual
      852:Slavic
      860:Portuguese
      863:Canadian/French
      865:Nordic
      Windows code page
      1250:Central Europe
      1252:Latin I
      1253:Greek
      1254:Turkish
      以下代码页仅限于 12×24 dot 英数字体
      WestEurope:WestEurope
      Greek:Greek
      Hebrew:Hebrew
      EastEurope:EastEurope
      Iran:Iran
      IranII:IranII
      Latvian:Latvian
      Arabic:Arabic
      Vietnam:Vietnam
      Uygur:Uygur
      Thai:Thai
      1252:Latin I
      1257:WPC1257
      1251:WPC1251
      866:Cyrillic
      858:PC858
      747:PC747
      864:PC864
      1001:PC100
      */
      data = "CODEPAGE " + codepage + "\r\n";
      jpPrinter.addCommand(data)
    }
	
    jpPrinter.setCls = function () { //清除打印机缓存
      data = "CLS" + "\r\n";
      jpPrinter.addCommand(data)
    };
	
    jpPrinter.setFeed = function (feed) { //将纸向前推出n
      data = "FEED " + feed + "\r\n";
      jpPrinter.addCommand(data)
    };

    jpPrinter.setBackFeed = function (backup) { //将纸向后回拉n
      data = "BACKFEED " + backup + "\r\n";
      jpPrinter.addCommand(data)
    }

    jpPrinter.setDirection = function (direction) { //设置打印方向，参考编程手册  
      data = "DIRECTION " + direction + "\r\n";
      jpPrinter.addCommand(data)
    };

    jpPrinter.setReference = function (x, y) { //设置坐标原点，与打印方向有关
      data = "REFERENCE " + x + "," + y + "\r\n";
      jpPrinter.addCommand(data)
    };

    jpPrinter.setFromfeed = function () { //根据Size进一张标签纸
      data = "FORMFEED \r\n";
      jpPrinter.addCommand(data)
    };

    jpPrinter.setHome = function () { //根据Size找到下一张标签纸的位置
      data = "HOME \r\n";
      jpPrinter.addCommand(data)
    };

    jpPrinter.setSound = function (level, interval) { //控制蜂鸣器
      data = "SOUND " + level + "," + interval + "\r\n";
      jpPrinter.addCommand(data)
    };

    jpPrinter.setLimitfeed = function (limit) { // 检测垂直间距
      data = "LIMITFEED " + limit + "\r\n";
      jpPrinter.addCommand(data)
    };

    jpPrinter.setBar = function (x, y, width, height) { //绘制线条
      data = "BAR " + x + "," + y + "," + width + "," + height + "\r\n"
      jpPrinter.addCommand(data)
    };

    jpPrinter.setBox = function (x_start, y_start, x_end, y_end, thickness) { //绘制方框
      data = "BOX " + x_start + "," + y_start + "," + x_end + "," + y_end + "," + thickness + "\r\n";
      jpPrinter.addCommand(data)
    };

    jpPrinter.setErase = function (x_start, y_start, x_width, y_height) { //清除指定区域的数据
      data = "ERASE " + x_start + "," + y_start + "," + x_width + "," + y_height + "\r\n";
      jpPrinter.addCommand(data)
    };

    jpPrinter.setReverse = function (x_start, y_start, x_width, y_height) { //将指定的区域反相打印
      data = "REVERSE " + x_start + "," + y_start + "," + x_width + "," + y_height + "\r\n";
      jpPrinter.addCommand(data)
    };

    jpPrinter.setText = function (x, y, font, x_, y_, str) { //打印文字
      data = "TEXT " + "2" + " " + "0" + " " + "200" + " " + 100 + " "  + "hahhahhahah" + "\r\n"
      jpPrinter.addCommand(data)
    };

    jpPrinter.setQR = function (x, y, level, width, mode, content) { //打印二维码
      data = "QRCODE " + x + "," + y + "," + level + "," + width + "," + mode + "," + 0 + ",\"" + content + "\"\r\n"
      jpPrinter.addCommand(data)
    };

    jpPrinter.setBar = function (x, y, codetype, height, readable, narrow, wide, content) { //打印条形码
      data = "BARCODE "+"QR" + x + " " + y + " " + "M 2 U 10\r\nMA," + "content"  + "\r\nENDQR"+"\r\n"
      jpPrinter.addCommand(data)
    };

    jpPrinter.setBitmap = function (x, y, mode, res) {  //添加图片，res为画布参数
      console.log(res)
      var width = parseInt((res.width + 7) / 8 * 8 / 8)
      var height = res.height;
      var time = 1;
      var temp = res.data.length - width * 32;
      var pointList = []
      console.log(width + "--" + height)
      data = "BITMAP " + x + "," + y + "," + width + "," + height + "," + mode + ","
      jpPrinter.addCommand(data)
      for (var i = 0; i < height; ++i) {
        console.log(temp)
        for (var j = 0; j < width; ++j) {
          for (var k = 0; k < 32; k += 4) {
            if (res.data[temp] == 0 && res.data[temp + 1] == 0 && res.data[temp + 2] == 0 && res.data[temp + 3] == 0) {
              pointList.push(1)
            } else {
              pointList.push(0)
            }
            temp += 4
          }
        }
        time++
        temp = res.data.length - width * 32 * time
      }
      for (var i = 0; i < pointList.length; i += 8) {
        var p = pointList[i] * 128 + pointList[i + 1] * 64 + pointList[i + 2] * 32 + pointList[i + 3] * 16 + pointList[i + 4] * 8 + pointList[i + 5] * 4 + pointList[i + 6] * 2 + pointList[i + 7]
        command.push(p)
      }
    }
	jpPrinter.setForm = function () { //打印页面
	  data = "FORM ,\r\n"
	  jpPrinter.addCommand(data)
	};
    jpPrinter.setPagePrint = function () { //打印页面
      data = "POPRINT ,\r\n"
      jpPrinter.addCommand(data)
    };
	jpPrinter.test=function(cpmc,cpgg,create_date,city,fzrtel,qymc,sym,id){
		if(id == 1){
			var code1 = "! 0 200 200 200 1\r\n"
			// var code8 = "PAGE-HEIGHT 200 \r\n"
			var code2 = "TEXT 5 0 10 0 产品名称："+cpmc+"\r\n";
			var code5 = "B QR 400 20 M 2 U 5\r\n";
			var code6 = "MA,http://www.aielab.net/ah/s?"+sym+"\r\n";
			var code7 = "ENDQR\r\n"
			var code3 = "FORM \r\n";
			var code4 = "POPRINT \r\n";
			console.log(command)
			jpPrinter.addCommand(code1)
			jpPrinter.addCommand("ROTATE 180\r\n")
			// jpPrinter.addCommand("TEXT 4 1 70 30 安徽省食用农产品合格证\r\n")
			jpPrinter.addCommand(code2)
			// jpPrinter.addCommand("TEXT 5 0 70 135 产品规格："+cpgg+"\r\n")
			jpPrinter.addCommand("TEXT 5 0 10 35 企业名称："+qymc+"\r\n")
			jpPrinter.addCommand("TEXT 5 0 10 70 联系方式："+fzrtel+"\r\n")
			jpPrinter.addCommand("TEXT 5 0 10 105 产地："+city+"\r\n")
			jpPrinter.addCommand("TEXT 5 0 10 140 打印日期："+create_date+"\r\n")
			// jpPrinter.addCommand("TEXT 5 0 70 310 我承诺对产品质量安全以及合\r\n")
			// jpPrinter.addCommand("TEXT 5 0 70 345 格真实性负责：\r\n")
			// jpPrinter.addCommand("TEXT 5 0 70 380 √不使用禁限用农药兽药\r\n")
			// jpPrinter.addCommand("TEXT 5 0 70 415 √不使用非法添加物\r\n")
			// jpPrinter.addCommand("TEXT 5 0 70 450 √遵守农药安全间隔\r\n")
			// jpPrinter.addCommand("TEXT 5 0 70 485 期、兽药休药期规定\r\n")
			// jpPrinter.addCommand("TEXT 5 0 70 520 √销售的食用农产品符\r\n")
			// jpPrinter.addCommand("TEXT 5 0 70 555 合农药兽药残留食品安全国家标准\r\n")
			jpPrinter.addCommand(code5)
			jpPrinter.addCommand(code6)
			jpPrinter.addCommand(code7)
			jpPrinter.addCommand(code3)
			jpPrinter.addCommand(code4)
		}else{
			var code1 = "! 0 200 200 600 1\r\n"
			// var code8 = "PAGE-HEIGHT 200 \r\n"
			
			var code5 = "B QR 350 300 M 2 U 5\r\n";
			var code6 = "MA,http://www.aielab.net/ah/s?"+sym+"\r\n";
			var code7 = "ENDQR\r\n"
			var code3 = "FORM \r\n";
			var code4 = "PRINT \r\n";
			console.log(command)
			jpPrinter.addCommand(code1)
			// jpPrinter.addCommand("ROTATE 180\r\n")
			jpPrinter.addCommand("TEXT 5 1 70 35 安徽省食用农产品合格证\r\n")
			jpPrinter.addCommand("TEXT 5 0 70 100 我承诺:\r\n")
			jpPrinter.addCommand("TEXT 20 1 70 135 √没有使用禁用农药兽药、停用兽药和非法添加物\r\n")
			jpPrinter.addCommand("TEXT 20 1 70 170 √上市农产品符合农药安全间隔期、兽药休药期规定\r\n")
			jpPrinter.addCommand("TEXT 20 1 70 205 √对食用农产品合格证的真实性负责\r\n")
			jpPrinter.addCommand("LINE 0 250 600 250 2\r\n")
			var code2 = "TEXT 20 1 70 265 食用农产品名称："+cpmc+"\r\n";
			jpPrinter.addCommand(code2)
			jpPrinter.addCommand("TEXT 20 1 70 300 产品规格："+cpgg+"\r\n")
			
			jpPrinter.addCommand("TEXT 20 1 70 335 联系方式："+fzrtel+"\r\n")
			jpPrinter.addCommand("TEXT 20 1 70 370 产地："+city+"\r\n")
			jpPrinter.addCommand("TEXT 20 1 70 405 开具日期："+create_date+"\r\n")
			jpPrinter.addCommand("TEXT 20 1 70 460 生产者盖章或签名："+qymc+"\r\n")
			
			
			
			jpPrinter.addCommand(code5)
			jpPrinter.addCommand(code6)
			jpPrinter.addCommand(code7)
			jpPrinter.addCommand(code3)
			jpPrinter.addCommand(code4)
		}
		
		// jpPrinter.addCommand("<ESC>h \r\n")
	}
	jpPrinter.test2 = function(){
		
		// jpPrinter.addCommand("^XA^JMA^LL300^PW9^MD30^PR2^POY^LRY^LH0,0 \N")
		jpPrinter.addCommand("^XAA@N,25,25,B:CYRILLIC.FNT^FO100,20^FS^PON \n")
		// jpPrinter.addCommand("^FDThis is a test.^FS \n")
		jpPrinter.addCommand("^A@N,I,50^FS \n")
		jpPrinter.addCommand("^FD安徽省农产品溯源^FS \n")
		jpPrinter.addCommand("^FO40,60 \n")
		jpPrinter.addCommand(" ^PQ 1 \n")
		jpPrinter.addCommand("^BQ,2,6^FDMA,http://www.aielab.net/ah \n")
		jpPrinter.addCommand("^XZ \n")
	}
    //获取打印数据
    jpPrinter.getData = function () {
		console.log(command)
      return command;
    };

    return jpPrinter;
  }
};

module.exports.jpPrinter = jpPrinter;