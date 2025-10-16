Page({
  /**
   * 页面的初始数据
   */
  data: {
    // ...common.data,
    textMessage: '',
    chatItems: [{type:"msg",role:"me" ,content:"文本消息 记住是三种类型"},
    {type:"time",role:"system" ,content:"星期一 12:54"},
    {type:"msg",role:"he" ,content:"文本消息 记住是三种类型"},
    {type:"voice",role:"he" ,content:"15",src:"data:image/gif;base64,R0lGODlhFgAgAIABAHenywAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVCODkzNTZBQTQxMTExRTdBMUU5RjQwNDFCQUNCRDgwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVCODkzNTZCQTQxMTExRTdBMUU5RjQwNDFCQUNCRDgwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUI4OTM1NjhBNDExMTFFN0ExRTlGNDA0MUJBQ0JEODAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUI4OTM1NjlBNDExMTFFN0ExRTlGNDA0MUJBQ0JEODAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQFIQABACwAAAAAFgAgAAACJYyPqcvtD6OctNqLs94IAOx9VuhRZDidZUpW6Chy8kzX9o3nUgEAIfkEBSEAAQAsCAAGAAYAFAAAAhaMARaI18tckrTCeVW0O+vnXVjHjEkBACH5BAklAAEALAAAAAAOACAAAAI1jA+nC73c0kNxmihttQHz7nCeGJLZNGqleqKr2z6b+YEx9OK3MrN16vsAYb8ebHcxynKySQEAIfkEBR4AAQAsAAAAABYAIAAAAhmMj6nL7Q+jnLTai7PevPsPhuJIluaJpkEBACH5BAUhAAEALAgABgAGABQAAAIWjAEWiNfLXJK0wnlVtDvr511Yx4xJAQAh+QQFJQABACwAAAAACAAgAAACKIwPh5DLyp6JbUp7Q4TbKZ1RXIV9nTeaGUiypJjGTnti9ArP491qQQEAOw==':'/static/chat/voice_mine.png'"}],
    type:'',
    height:100,
    isShow:false,
    luYing:false
  },
  // ...common.method,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getPage(options);
  },
  setMessage(e){
    let {value} = e.detail;
    this.setData({
      textMessage:value,
    })
   
  },
  getPage(options){
    let {type,top} = options;

    this.setData({
      type: type,
      top:top
    })

    //获取对方和我方信息



  },
  sendJsonText(data){
    //发送消息并执行更新页面数据
    this.setData({
       
      chatItems:[...this.data.chatItems, {"type":"msg", role:"me", content:this.data.textMessage}]
    })
    this.getAnswer()
  },
  //显示和隐藏上传图片的功能
  showBox(e){
    let {isShow} = this.data;
    if(isShow){
       isShow=false;
       }else{
      isShow = true;
    }
    this.setData({
      isShow:isShow
    });
  },
  showLy(e){
    let { luYing } = this.data;
    if (luYing) {
      luYing = false;
    } else {
      luYing = true;
    }
    this.setData({
      luYing: luYing
    });
  },
  //开始录音
  startRecording(){

    //录音及检测

  },
  //结束录音并上传
  endRecording() {

    //上传完毕后返回路径并发送消息

  },
  //上传并发送图片
  sendImg(){
    
  },
  getAnswer(){

  var that =this
  wx.request({

    url:'http://127.0.0.1:5000/get_answer',
    data: { query:this.data.textMessage },
    header: {
        'content-type': 'application/x-www-form-urlencoded; charset=GBK' // 指定编码为GBK
      },
    success: function(res) {
  
      console.log(res),// 服务器回包信息
      console.log(that),
      that.append_record("he",res.data)
    },fail: function (res) {

        wx.showToast({ title: '系统错误' })

      },

      complete: function (res) {

        wx.hideLoading()

      }
      
  
  })
  },
  append_record(role,data){
    this.setData({
        chatItems:[...this.data.chatItems, {"type":"msg", role:role, content:data}]
      })
  }
});
