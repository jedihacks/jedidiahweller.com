"""Generate the public two-page speaker brief. Requires reportlab; no remote assets."""
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.lib.utils import ImageReader
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
from pathlib import Path
root=Path(__file__).resolve().parents[1]
out=root/'public/downloads/jedidiah-weller-speaker-kit.pdf'
out.parent.mkdir(parents=True,exist_ok=True)
c=canvas.Canvas(str(out),pagesize=(612,792))
c.setTitle('Jedidiah Weller - Speaker Kit');c.setAuthor('Jedidiah Weller')
ink=HexColor('#202e2a');muted=HexColor('#50645a');orange=HexColor('#a65325')
style=ParagraphStyle('body',fontName='Helvetica',fontSize=11,leading=17,textColor=muted)
def para(text,x,y,width=510,size=11,color=muted,bold=False):
 p=Paragraph(text,ParagraphStyle('p',parent=style,fontName='Helvetica-Bold' if bold else 'Helvetica',fontSize=size,leading=size*1.48,textColor=color));w,h=p.wrap(width,700);p.drawOn(c,x,y-h);return y-h

def base(page,label):
 c.setFillColor(HexColor('#faf8f3'));c.rect(0,0,612,792,fill=1,stroke=0)
 c.setFillColor(ink);c.rect(0,735,612,57,fill=1,stroke=0)
 c.setFillColor(HexColor('#ffffff'));c.setFont('Helvetica-Bold',12);c.drawString(50,758,'JEDI. / SPEAKING')
 c.setFillColor(muted);c.setFont('Helvetica',9);c.drawString(50,32,'jedidiahweller.com/speaking/');c.drawRightString(562,32,f'{label}  /  {page}')
 c.linkURL('https://jedidiahweller.com/speaking/',(50,25,280,45),relative=0)
base(1,'PROFILE')
para('A builder’s perspective.<br/>A useful next decision.',50,692,size=30,color=ink,bold=True)
y=para('Jedidiah "Jedi" Weller',50,566,size=21,color=ink,bold=True)
y=para('Founder &amp; Software Guru. Speaker. Maker.',50,y-13,size=12,color=orange,bold=True)
y=para('Jedidiah brings product strategy, design, engineering, and entrepreneurship into the same conversation. His current writing examines AI economics: how teams can compare APIs, local models, and rented infrastructure around the cost of useful results.',50,y-22)
y=para('OpenForge’s public team page identifies him as its founder and CEO. Explore the public company pages for the current work behind OpenForge, Startup Wars, and Summon Worlds.',50,y-16)
y=para('FOR YOUR EVENT OR TEAM',50,y-30,size=10,color=orange,bold=True)
y=para('Sessions begin with a real question: what decision should the audience be better equipped to make? Topic, audience, format, and duration are agreed during planning.',50,y-12)
y=para('START A CONVERSATION',50,y-30,size=10,color=orange,bold=True)
y=para('Share your audience, event date or planning window, location or time zone, preferred format, and desired outcome.',50,y-12)
y=para('<link href="https://jedidiahweller.com/contact/" color="#315e4a">jedidiahweller.com/contact/</link><br/><link href="mailto:hello@openforge.io" color="#315e4a">hello@openforge.io</link>',50,y-15)
para('Profile reference: openforge.io/about-us/ - checked November 2, 2026.',50,70,size=8)
c.showPage();base(2,'TOPICS')
y=para('Three conversations worth having.',50,695,size=25,color=ink,bold=True)
topics=[('01 / THE REAL COST OF AI','For engineering leaders, founders, and product teams.','Include labor and fallback in the cost model; separate capability from ROI; plan a workload pilot before buying hardware.'),('02 / FROM UNCERTAIN IDEA TO USEFUL PRODUCT','For founders and product, design, and engineering teams.','Turn assumptions into testable questions; align disciplines around a small experiment; distinguish activity from evidence of user value.'),('03 / LEARNING ENTREPRENEURSHIP BY MAKING DECISIONS','For educators, entrepreneurship programs, and founder communities.','Frame constraints and consequences; use simulation to start a conversation; connect a classroom debrief to founder uncertainty.')]
for title,audience,takeaways in topics:
 y=para(title,50,y-30,size=11,color=orange,bold=True)
 y=para(audience,50,y-10,size=11,color=ink,bold=True)
 y=para('Takeaways: '+takeaways,50,y-8)
y=para('FORMAT & PLANNING',50,y-30,size=10,color=orange,bold=True)
y=para('Talks, facilitated discussions, and workshop concepts can be scoped to your audience. Availability, delivery mode, duration, and fees are confirmed directly. The topic outlines describe intended takeaways.',50,y-10)
para('<link href="https://jedidiahweller.com/blog/ai-llm-cost-comparison/" color="#315e4a">Read the AI economics essay and explore the cost calculator.</link>',50,y-18,size=10)
c.save();print(out)
