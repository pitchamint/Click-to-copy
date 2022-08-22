//เราต้องทำการตั้งตัวแปรให้กับตัวที่เราอยากทำงานให้เรียบร้อยก่อน
const btn = document.querySelector('.btn')
const coupon = document.querySelector('.coupon')

//ต้องการที่จะดักจับว่ามีคนคลิกที่ปุ่มคัดลอกมั้ยคลิกแล้วเกิดอะไร
btn.addEventListener("click",(e)=>{
    coupon.select()
    coupon.setSelectionRange(0,999999)
    //กำหนดเลือกว่าจะเอาอักษรตั้งแต่ตัวที่เท่านี้ถึงตัวที่เท่านี้
    navigator.clipboard.writeText(coupon.value)
    //navigator หมายความว่าเราจะ copy ไปไว้ที่ clipboard โดยจะก็อปข้อความจากwriteText ในคูปองvalue
    btn.textContent = "คัดลอกเรียบร้อย!!" //เปลี่ยนข้อความในปุ่มเมื่อเรากดแล้ว
    setTimeout(()=>{
        btn.textContent = "Copy"
    },3000) //เมื่อกดปุ่มแล้วผ่านไป 3 วิ ค่าข้อความจะกลับมาที่ Copy เนื่องจากถ้าเราไม่ให้มันหมดเวลาข้อความที่เราก็อปมาจะเป็นข้อความอันเดิมก่อนหน้า ไม่เปลี่ยนไปตามที่เราพิมพ์
})
//กดปุ่มแล้วเข้าไที่ตัวแปรคูปอง เลือกเอาค่ะที่กำหนดไว้ value 