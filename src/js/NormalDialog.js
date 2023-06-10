// 封装类 与ctx无关
function NormalDialog(p_pen,p_ctx)
{
    var pen = p_pen
    var ctx = p_ctx
    this.init_draw = ()=>
    {
        pen.draw_normal_dialog(ctx)
    }
    this.draw_ch = (p_sentence)=>
    {
        character_array = p_sentence.split("")
        var ch_offestx = 0
        var ch_index = 0
        var ch_wait_time = 1000
        var timer = setInterval(()=>
        {
            console.log(character_array[ch_index])
            p_pen.draw_normal_text(ctx,character_array[ch_index],ch_offestx,550)
            // if(character_array[ch_index] == ' ')
            // {
            // 	dialog.innerText += '\xa0'
            // }
            ch_index += 1
            ch_offestx += 10
            if(ch_index == character_array.length)
            {
                clearInterval(this.timer)
            }
            
        },ch_wait_time)
    }
}