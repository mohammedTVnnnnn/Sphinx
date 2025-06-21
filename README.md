# Sphinx 1 Centre Hotel

## نظرة عامة

**Sphinx 1 Centre Hotel** هو موقع إلكتروني حديث لفندق في الجيزة، يتيح للزوار استعراض الغرف والخدمات، معرفة الموقع، وحجز الغرف بسهولة عبر نموذج تفاعلي يرسل تفاصيل الحجز مباشرة إلى واتساب إدارة الفندق.

---

## المحتوى

- [المميزات](#المميزات)
- [الهيكلية](#الهيكلية)
- [التثبيت والتشغيل](#التثبيت-والتشغيل)
- [التخصيص](#التخصيص)
- [التقنيات المستخدمة](#التقنيات-المستخدمة)
- [لقطات شاشة](#لقطات-شاشة)
- [حقوق الملكية](#حقوق-الملكية)

---

## المميزات

- **واجهة ثنائية اللغة** (عربي/إنجليزي) مع تبديل فوري للغة.
- **عرض تفاعلي للغرف** مع معرض صور لكل غرفة (باستخدام Swiper.js).
- **نموذج حجز متكامل** يرسل الطلب مباشرة إلى واتساب.
- **تصميم متجاوب بالكامل** لجميع الأجهزة.
- **تأثيرات بصرية متقدمة** (رسوم متحركة معززة، تدرجات، ظلال).
- **شريط تقدم للتمرير** وتجربة مستخدم سلسة.
- **شاشة تحميل جذابة** لتحسين تجربة المستخدم الأولية.
- **خريطة مدمجة** لموقع الفندق.

---

## الهيكلية

```
Sphinx/
│
├── fonts/                # الخطوط المخصصة
│   └── Quivert.ttf
├── img/                  # صور الغرف
│   └── room-1/2/3/4/5/   # مجلدات لكل غرفة
├── index.html            # الصفحة الرئيسية
├── styles.css            # أنماط CSS
├── script.js             # جافاسكريبت (تبديل اللغة، الحجز، إلخ)
└── README.md             # ملف التوثيق (أنت هنا)
```

---

## التثبيت والتشغيل

1. **الخطوة 1:** قم بتنزيل أو استنساخ المستودع:
   ```bash
   git clone <https://github.com/mohammedTVnnnnn/Sphinx.git>
   ```

2. **الخطوة 2:** ضع المجلد على أي خادم ويب أو افتح `index.html` مباشرة في المتصفح.

3. **الخطوة 3:** تأكد من وجود جميع الصور والخطوط في أماكنها الصحيحة.

4. **الخطوة 4:** لا حاجة لأي إعدادات خلفية (Back-end)، كل شيء يعمل من جهة العميل (Client-side).

---

## التخصيص

- **تغيير أرقام الغرف أو الصور:** أضف أو احذف الصور من مجلدات `img/room-x/` وعدل `index.html` إذا لزم الأمر.
- **تغيير رقم واتساب:** عدل المتغير `whatsappNumber` في `script.js`.
- **إضافة خدمات أو أقسام:** أضف عناصر جديدة في أقسام الخدمات أو الغرف في `index.html`.
- **تغيير الألوان أو الخطوط:** عدل متغيرات CSS في `styles.css`.

---

## التقنيات المستخدمة

- **HTML5, CSS3, JavaScript ES6**
- **[Swiper.js](https://swiperjs.com/)** لعرض صور الغرف
- **Google Fonts** (Cairo, Poppins)
- **Font Awesome** للأيقونات
- **Responsive Design** (Media Queries)
- **WhatsApp API** لإرسال الحجز
- **Intersection Observer API** للتحكم في الرسوم المتحركة عند التمرير

---
## حقوق الملكية

جميع الحقوق محفوظة © 2025 فندق سفنكس 1 سنتر  
All rights reserved © 2025 Sphinx 1 Centre Hotel

---

# English Version

## Overview

**Sphinx 1 Centre Hotel** is a modern hotel website for a Giza-based hotel, allowing visitors to browse rooms and services, view the location, and book rooms easily via an interactive form that sends booking details directly to the hotel's WhatsApp.

---

## Features

- **Bilingual interface** (Arabic/English) with instant language switching.
- **Interactive room galleries** (Swiper.js).
- **Integrated booking form** that sends requests to WhatsApp.
- **Fully responsive design** for all devices.
- **Advanced visual effects** (enhanced animations, gradients, shadows).
- **Scroll progress bar** and smooth user experience.
- **Engaging loading screen** for improved initial user experience.
- **Embedded map** for hotel location.

---

## Structure

See the [Arabic section](#الهيكلية) for the folder structure.

---

## Installation & Usage

1. **Step 1:** Download or clone the repository:
   ```bash
   git clone <https://github.com/mohammedTVnnnnn/Sphinx.git>
   ```

2. **Step 2:** Place the folder on any web server or open `index.html` directly in your browser.

3. **Step 3:** Ensure all images and fonts are in their correct folders.

4. **Step 4:** No backend setup required; everything works client-side.

---

## Customization

- **Change room numbers or images:** Add/remove images in `img/room-x/` and update `index.html` if needed.
- **Change WhatsApp number:** Edit the `whatsappNumber` variable in `script.js`.
- **Add services or sections:** Add new items in the services or rooms sections in `index.html`.
- **Change colors or fonts:** Edit CSS variables in `styles.css`.

---

## Technologies Used

- **HTML5, CSS3, JavaScript ES6**
- **[Swiper.js](https://swiperjs.com/)** for room galleries
- **Google Fonts** (Cairo, Poppins)
- **Font Awesome** for icons
- **Responsive Design** (Media Queries)
- **WhatsApp API** for booking
- **Intersection Observer API** for scroll-triggered animations

---
## License

All rights reserved © 2025 Sphinx 1 Centre Hotel 