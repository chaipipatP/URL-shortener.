Deliverables
1 ปัญหาความปลอดมีแต่การเข้าถึง Mongodb ได้โดยไม่ต้อง Auth (ค่าเริ่มต้นของ Mongodb) วิธีแก้คือให้ Auth ถึงจะเข้าสู่ Mongodb ได้
2 สำหรับ Project  นี้การขยายขนาดถ้าไม่มากอาจแค่ทำ Load balance ทำหลับตัวเว็บ และ Mongodb นั้นปกติแล้วจะเก็บ Index ไว้บนแรมก็ควรเพื่มแรมให้มากขึ้นความเร็วจะเพื่มขึ้นอีก แต่ถ้ามีผู้ใช้มากจริงๆอาจต้องทำ  Mongodb cluster 
   ทั้งหมดนี้ควรเก็บไว้บน Cloud service เช่น AWS และ Azure เพื่อจะได้ มีความยืดหยุ่นมากขึ้นและจัดการได้ง่าย
3 
-รับค่า URL shortener จากหน้าเว็บเมื่อกดปุ่มตกลงจะส่ง URL นี้ไปขอ URL สั้นๆจาก API หลังบ้านและ ถ้าได้มาแล้วจะเอามาแสดงกกน้าเว็บ ส่วนถ้า URL ที่ใส่ไปนั้นช้ำกับของเติมจะส่ง URL สั้นของเติมให้ 
-การทำ URL สั้นๆในที่นี้ จะเอา URL มาใส่ใน Mongodb แล้วนำ​ ID ที่ได้มาใช้การเข้ารหัส Base59 อีกที ส่วนการถอดรหัสก็ใช้รหัสที่ได้มาจาก URL ถอดรหัสเป็นเลข ID ใน Mongodb เพื่อหา URL ปลายทาง
-การกำหนดชื่อ  URL shortener  เองจะเอาชื่อที่กำหนดเองใส่ลง Mongodb ตรงๆและ ปลายทางลงไปด้วย ถ้ามีการใช้ช้ำกับก็จะแสดงข้อความออกมา
-ที่ URL สั้นปกติไม่เก็บข้อมูลหลังจากการเข้ารหัส Base59 ลงไปเลยทันทีเพราะลดการเก็บข้อมูลของ Mongodb ได้
-ใช้ Module mongoose ในการติดต่อกับ Mongodb
