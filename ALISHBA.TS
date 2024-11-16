










interface Item {
    name: string;
    price: number;
    quantity: number;
  }
  
  let itemsArray: Item[] = [
    { name: "juice", price: 50, quantity: 3 },
    { name: "cookie", price: 30, quantity: 9 },
    { name: "shirt", price: 880, quantity: 1 },
    { name: "pen", price: 100, quantity: 2 }
  ];
  
  // Calculate total price of each item and all items
  let totalAmount = 0;
  
  itemsArray.forEach(item => {
    const totalPrice = item.price * item.quantity;
    console.log(`${item.name}: Total Price = ${totalPrice}`);
    totalAmount += totalPrice;
  });
  
  console.log(`Total price of all items: ${totalAmount}`);

  

















//assignment 2
function power(a: number, b: number): number {
    return Math.pow(a, b);
  }
  
  console.log(power(2, 3));  // Output: 8
  









  function isLeapYear(year: number): boolean {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return true;
    }
    return false;
  }
  
  let year = 2024;
  console.log(isLeapYear(year));  // Output: true

  









  function calculateArea(a: number, b: number, c: number): number {
    let s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }
  
  let area = calculateArea(5, 6, 7);
  console.log(area);  // Output: 14.7 (approx.)

  













  function average(marks: number[]): number {
    let total = marks.reduce((sum, mark) => sum + mark, 0);
    return total / marks.length;
  }
  
  function percentage(marks: number[], totalMarks: number): number {
    let total = marks.reduce((sum, mark) => sum + mark, 0);
    return (total / totalMarks) * 100;
  }
  
  function mainFunction() {
    let marks = [80, 90, 85];
    let totalMarks = 300;
    let avg = average(marks);
    let perc = percentage(marks, totalMarks);
    
    console.log(`Average: ${avg}`);
    console.log(`Percentage: ${perc}%`);
  }
  
  mainFunction();

  













  function customIndexOf(str: string, char: string): number {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        return i;
      }
    }
    return -1;  // Return -1 if character is not found
  }
  
  console.log(customIndexOf("hello", "e"));  // Output: 1

  










  function removeVowels(sentence: string): string {
    return sentence.replace(/[aeiouAEIOU]/g, '');
  }
  
  let sentence = "Please read this application and give me gratuity";
  console.log(removeVowels(sentence));  // Output: "Pls rd ths pplctn nd gv m grt"

  













  function countVowelPairs(sentence: string): number {
    const vowels = "aeiou";
    let count = 0;
    
    for (let i = 0; i < sentence.length - 1; i++) {
      if (vowels.includes(sentence[i].toLowerCase()) && vowels.includes(sentence[i + 1].toLowerCase())) {
        count++;
      }
    }
    return count;
  }
  
  let sentenceForVowels = "Please read this application and give me gratuity";
  console.log(countVowelPairs(sentenceForVowels));  // Output: 3

  












  function convertDistance(distanceInKm: number) {
    let meters = distanceInKm * 1000;
    let feet = distanceInKm * 3280.84;
    let inches = distanceInKm * 39370.1;
    let centimeters = distanceInKm * 100000;
    
    console.log(`Meters: ${meters}`);
    console.log(`Feet: ${feet}`);
    console.log(`Inches: ${inches}`);
    console.log(`Centimeters: ${centimeters}`);
  }
  
  let distance = 5;  // Distance in kilometers
  convertDistance(distance);

  












  function calculateOvertimePay(hoursWorked: number): number {
    let regularHours = 40;
    let overtimeRate = 12;  // Rs. per hour
    if (hoursWorked > regularHours) {
      let overtimeHours = hoursWorked - regularHours;
      return overtimeHours * overtimeRate;
    }
    return 0;
  }
  
  console.log(calculateOvertimePay(45));  // Output: 60 (5 hours overtime)

  












  function calculateCurrencyNotes(amount: number) {
    let notes100 = Math.floor(amount / 100);
    let remainingAmount = amount % 100;
    
    let notes50 = Math.floor(remainingAmount / 50);
    remainingAmount = remainingAmount % 50;
    
    let notes10 = Math.floor(remainingAmount / 10);
  
    console.log(`100 Rs Notes: ${notes100}`);
    console.log(`50 Rs Notes: ${notes50}`);
    console.log(`10 Rs Notes: ${notes10}`);
  }
  
  let withdrawalAmount = 460;  // Amount in hundreds
  calculateCurrencyNotes(withdrawalAmount);
  