export interface Review {
  /** Reviewer display name as shown on the source site */
  author: string;
  /** 1–5 star rating */
  rating: number;
  /** Review title, if the source provides one */
  title?: string;
  /** Short excerpt from the review body (kept under ~300 chars for carousel fit) */
  text: string;
  /** Name of the platform the review lives on */
  source: 'TripAdvisor' | 'Yelp' | 'Google' | 'The New Yorker';
  /** Link to the review or its source page */
  url: string;
}

/**
 * Reviews shown in the home page carousel. Each links back to the platform
 * where it was originally posted. Text is quoted from the public review page.
 *
 * TripAdvisor reviews sourced from:
 * https://www.tripadvisor.com/Restaurant_Review-g47960-d1117673-Reviews-Kabab_King-Jackson_Heights_Queens_New_York.html
 */
export const reviews: Review[] = [
  {
    author: 'Zohran Mamdani',
    rating: 5,
    title: 'Mayor of New York City',
    text: 'You gotta go there for biryani.',
    source: 'The New Yorker',
    url: 'https://www.youtube.com/shorts/q-_uPs97S0k',
  },
  {
    author: 'Anish C',
    rating: 5,
    title: 'Best Chicken Kebabs Ever!',
    text: 'The chicken kebabs are exceptional — the meat quality, the spices, and the flavor were incredible. Quick service and affordable prices.',
    source: 'TripAdvisor',
    url: 'https://www.tripadvisor.com/Restaurant_Review-g47960-d1117673-Reviews-Kabab_King-Jackson_Heights_Queens_New_York.html',
  },
  {
    author: 'Daniel Sumit Ghosal',
    rating: 5,
    title: 'Oh my, I\u2019m Drooling!!!!',
    text: 'One of NY\u2019s best Indian and Pakistani restaurants. Fresh naan and traditional Mughal cuisine done right.',
    source: 'TripAdvisor',
    url: 'https://www.tripadvisor.com/Restaurant_Review-g47960-d1117673-Reviews-Kabab_King-Jackson_Heights_Queens_New_York.html',
  },
  {
    author: 'RR',
    rating: 5,
    title: 'Amazing food',
    text: 'Mind blowing kabab \u2014 surpasses other Jackson Heights establishments. Reshmi kebab and chana dal were exceptional. Plain decor but unbeatable rates and great food.',
    source: 'TripAdvisor',
    url: 'https://www.tripadvisor.com/Restaurant_Review-g47960-d1117673-Reviews-Kabab_King-Jackson_Heights_Queens_New_York.html',
  },
  {
    author: 'Wonderer-traveller',
    rating: 5,
    title: 'Yummy',
    text: 'The most yummy seekh kababs and biryani. Authentic atmosphere and staff who made us feel right at home.',
    source: 'TripAdvisor',
    url: 'https://www.tripadvisor.com/Restaurant_Review-g47960-d1117673-Reviews-Kabab_King-Jackson_Heights_Queens_New_York.html',
  },
  {
    author: 'Tampa_traveler63',
    rating: 4,
    title: 'Lots of great food at good prices',
    text: 'Came with a group of 8 \u2014 excellent service and dishes. The best (and most raved-about dish) was the lamb chops. The kebabs were also excellent.',
    source: 'TripAdvisor',
    url: 'https://www.tripadvisor.com/Restaurant_Review-g47960-d1117673-Reviews-Kabab_King-Jackson_Heights_Queens_New_York.html',
  },
  {
    author: 'rutonyu',
    rating: 5,
    title: 'Love this place.',
    text: 'Reminiscent of Karachi with amazing food. Not the fanciest spot but absolutely worthwhile \u2014 order extra naan to take home.',
    source: 'TripAdvisor',
    url: 'https://www.tripadvisor.com/Restaurant_Review-g47960-d1117673-Reviews-Kabab_King-Jackson_Heights_Queens_New_York.html',
  },
  {
    author: 'emascreen',
    rating: 5,
    title: 'Food for every budget',
    text: 'Good, inexpensive Pakistani food for casual dining. If you\u2019re in a group, head to the second floor.',
    source: 'TripAdvisor',
    url: 'https://www.tripadvisor.com/Restaurant_Review-g47960-d1117673-Reviews-Kabab_King-Jackson_Heights_Queens_New_York.html',
  },
];
