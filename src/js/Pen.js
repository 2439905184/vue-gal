// 封装部分 CanvasRenderingContext2D p_ctx相当于指针
var Pen = function(p_ctx)
			{
				this.setStrokeColor = (p_rgb)=>
				{
					p_ctx.strokeStyle=xxx;
				}
				this.setStrokeColorHex = (p_hex)=>
				{
					p_ctx.strokeStyle = p_hex
				}
				this.set_width = (p_ctx,p_width)=>
				{
					p_ctx.lineWidth = p_width
				}
				// 默认为黑色
				this.draw_normal_text =(p_ctx,p_text,px,py)=>
				{
					p_ctx.fillStyle = "#000000"
					p_ctx.fillText(p_text,px,py)
				}
				this.setFont = (p_ctx,p_attribute)=>
				{
					p_ctx.font = p_attribute
				}
				// 内置不可变
				this.draw_normal_dialog = (p_ctx)=>
				{
					p_ctx.fillStyle = "#ffbf00"
					p_ctx.fillRect(0,500,800,100)
				}
				// 游戏初始界面 仿renpy
				this.draw_main_sidebar = (p_ctx)=>
				{
					p_ctx.fillStyle = "#b3d1ff"
					p_ctx.fillRect(0,0,200,600)
					p_ctx.fillStyle = "#ffffff"
					p_ctx.font = "25px serif"
					p_ctx.fillText("start",100,200)
					p_ctx.fillText("about",100,400)
				}
				/**p_attr 字符串属性 **/
				this.set_text_width = (p_ctx,p_attribute)=>
				{
					p_ctx.font = p_attribute
				}
				this.cls = (p_ctx,p_width,p_height)=>
				{
					p_ctx.clearRect(0,0,p_width,p_height)
					p_ctx.fillRect(0, 0, p_width,p_height)
				}
			}