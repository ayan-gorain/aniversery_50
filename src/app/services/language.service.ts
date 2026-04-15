import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLang = signal<'en' | 'bn'>('en');

  t = computed(() => this.translations[this.currentLang()]);

  toggleLanguage() {
    this.currentLang.update(l => l === 'en' ? 'bn' : 'en');
    if (this.currentLang() === 'bn') {
      document.body.classList.add('lang-bn');
    } else {
      document.body.classList.remove('lang-bn');
    }
  }

  toNumber(num: number | string): string {
    const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    if (this.currentLang() === 'en') {
      return num.toString();
    }
    return num.toString().replace(/[0-9]/g, (d) => bengaliDigits[parseInt(d, 10)]);
  }

  translations = {
    en: {
      toggleBtn: 'বাংলা',
      heroBadge: '50 Golden Years',
      heroTitle: 'Celebrating a Lifetime of Love',
      heroNamesMap: { p1: 'Mr Arjun Gorai', and: '&', p2: 'Mrs Ambika Gorai' },
      countTitle: 'The Golden Day Approaches',
      days: 'Days', hours: 'Hours', mins: 'Minutes', secs: 'Seconds',
      galleryTitle: 'A Tale of 2 Stories',
      gallerySub: 'Before their journey...',
      g1: 'A young boy...',
      g2: '...and a young girl,',
      g3: 'Who met...',
      g4: '...and created a history of love.',
      storyTitle: 'Their Journey',
      storySub: 'A true testament to love, patience, and unwavering support through five beautiful decades.',
      metTitle: 'How They Met',
      metDesc: 'A chance encounter that sparked a 50-year romance. It all started with a simple hello and a shared cup of coffee.',
      wedTitle: 'The Wedding Day',
      wedDesc: 'Surrounded by family and friends, they exchanged rings and promises, beginning their lifelong journey together.',
      famYear: '1980s',
      famTitle: 'Building a Family',
      famDesc: 'Welcoming their wonderful children into the world. A house filled with laughter, love, and a few sleepless nights.',
      legTitle: 'A Golden Legacy',
      legDesc: 'Fifty years later, their love stands stronger than ever, an inspiration to their children and grandchildren.',
      inviteTitle: 'You are joyfully invited',
      inviteSub: 'to celebrate the Golden Anniversary of',
      inviteNames: 'Mr Arjun Gorai & Mrs Ambika Gorai',
      hostNames: 'Mr Arjun Gorai & Mrs Ambika Gorai',
      hostFamily: 'from Gorai Family',
      date: 'Friday, April 17th, 2026',
      time: '5:00 PM onwards',
      venue: 'The Community Hall',
      address: 'Destination Konnagar',
      mapBtn: 'View on Map',
      today: 'Today',
      metYear: '1974',
      wedYear: '1976'
    },
    bn: {
      toggleBtn: 'English',
      heroBadge: '৫০ সোনালী বছর',
      heroTitle: 'ভালোবাসার এক আজীবন উদযাপন',
      heroNamesMap: { p1: 'অর্জুন গরাই', and: 'ও', p2: 'অম্বিকা গরাই' },
      countTitle: 'সোনালী দিনটি আসন্ন',
      days: 'দিন', hours: 'ঘণ্টা', mins: 'মিনিট', secs: 'সেকেন্ড',
      galleryTitle: 'দুটি গল্পের কথা',
      gallerySub: 'তাদের যাত্রার আগে...',
      g1: 'এক ছোট্ট ছেলে...',
      g2: '...আর এক ছোট্ট মেয়ে,',
      g3: 'যাদের দেখা হলো...',
      g4: '...এবং ভালোবাসার এক ইতিহাস তৈরি করলো।',
      storyTitle: 'তাদের যাত্রা',
      storySub: 'পাঁচটি সুন্দর দশক ধরে ভালোবাসা, ধৈর্য এবং অটুট সমর্থনের একটি সত্য প্রমাণ।',
      metTitle: 'কিভাবে দেখা হলো',
      metDesc: 'একটি আকস্মিক সাক্ষাৎ যা ৫০ বছরের প্রেমের সূচনা করে। এটি শুরু হয়েছিল একটি সহজ হ্যালো এবং একসাথে চা পানের মাধ্যমে।',
      wedTitle: 'বিয়ের দিন',
      wedDesc: 'পরিবার এবং বন্ধুদের উপস্থিতিতে, তারা আংটি এবং প্রতিশ্রুতি বিনিময় করেন এবং তাদের আজীবন যাত্রা শুরু করেন।',
      famYear: '১৯৮০-এর দশক',
      famTitle: 'পরিবার গঠন',
      famDesc: 'তাদের চমৎকার সন্তানদের পৃথিবীতে স্বাগত জানানো। হাসি, ভালোবাসা এবং কয়েকটি নির্ঘুম রাতে ভরা একটি বাড়ি।',
      legTitle: 'একটি সোনালী উত্তরাধিকার',
      legDesc: 'পঞ্চাশ বছর পর, তাদের ভালোবাসা আগের চেয়েও শক্তিশালী, তাদের সন্তান এবং নাতি-নাতনিদের জন্য এক অনুপ্রেরণা।',
      inviteTitle: 'আপনাকে সানন্দে আমন্ত্রণ জানানো হচ্ছে',
      inviteSub: 'সোনালী বার্ষিকী উদযাপনে',
      inviteNames: 'অর্জুন গরাই ও অম্বিকা গরাই',
      hostNames: 'অর্জুন গরাই ও অম্বিকা গরাই',
      hostFamily: 'গরাই পরিবারের পক্ষ থেকে',
      date: 'শুক্রবার, ১৭ ই এপ্রিল, ২০২৬',
      time: 'বিকেল ৫:০০ টা থেকে',
      venue: 'কমিউনিটি হল',
      address: 'ডেস্টিনেশন কোন্নগর',
      mapBtn: 'ম্যাপে দেখুন',
      today: 'আজ',
      metYear: '১৯৭৪',
      wedYear: '১৯৭৬'
    }
  };
}
