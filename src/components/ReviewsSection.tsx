import { useState, useRef } from 'react'

const reviews = [
  { name: 'Bonnie Dunaway', date: '5 weeks ago', text: 'Excellent service from start to finish! They quickly helped us with rat traps and ant treatment around our property, and the results were immediate. Highly professional team.' },
  { name: 'Walt Munhall', date: '5 weeks ago', text: 'Awesome experience — no more pests! They do it right the first time. Thanks!' },
  { name: 'Cyndi Etter', date: '5 weeks ago', text: 'At a time when customer service seems to be lacking so much of the time, it was so nice to work with a company that was truly responsive, professional, and effective.' },
  { name: 'Thea', date: '9 weeks ago', text: 'Great work dealing with the rats in Gilcrease Hills. They were on time, orderly and ethical. I\'m very impressed by them.' },
  { name: 'Joseph Stranner', date: '14 weeks ago', text: 'Amazing pest control service! They service our building and always do an excellent job. The technicians are friendly, professional, and thorough every single time.' },
  { name: 'Brandon Roger', date: '14 weeks ago', text: 'I am terrified of spiders and we were getting them constantly along all the baseboards in my home. Also had crickets. Pathfinder completely solved the problem!' },
  { name: 'Cardona LLC', date: '17 weeks ago', text: 'This pest control is superb — they eliminated all the ants in one visit! Definitely great customer service. Thanks guys!!!' },
  { name: 'Dan Burns', date: '18 weeks ago', text: 'My brother-in-law recommended Pathfinder for my ant problem. I couldn\'t be happier with the service. By far the #1 exterminator I would recommend in the Tulsa area!' },
  { name: 'Gabriel J Wheeler', date: '19 weeks ago', text: 'Best exterminator in Tulsa OK. Glad to have booked you guys for the job. Thank You.' },
  { name: 'Kayla Dean', date: '27 weeks ago', text: 'Pathfinder Tulsa is very professional and thorough. Explained everything clearly and did a great job.' },
  { name: 'Charli Jayee', date: '29 weeks ago', text: 'I had an outstanding experience! Mikkel came out to take care of a wasp problem and was incredibly thorough, making sure every nest was eliminated. Five stars!' },
  { name: 'Shaylin Clark', date: '33 weeks ago', text: 'Pathfinder really helped my family out! We were having big problems with termites and they came and solved the issue fairly quickly. Great service and friendly workers. Definitely recommend!' },
  { name: 'Edwin Boyce', date: '34 weeks ago', text: 'Mikkael was very knowledgeable, polite and persistent and stayed with his treatments until he eradicated all the pests. Outstanding service.' },
  { name: 'Marquis Houston', date: '36 weeks ago', text: 'The pest control technician in the Tulsa area is very insightful. He will help out in every way he can. I highly recommend them.' },
  { name: 'Rachel Elizabeth', date: '36 weeks ago', text: 'They knocked them out quick. They listen to you. They give feedback and what solution would be for your home. Totally recommend!' },
  { name: 'Marisa Littlefield', date: '46 weeks ago', text: 'Great experience! Fast service, great communication. Mikkel took time to inspect my new home and took care of any issues. I will be using them again!' },
  { name: 'Katie King', date: 'May 2024', text: 'Credible, quick, and professional — will definitely be using again! I needed a rush job completed and they not only delivered within that same morning but also went above and beyond.' },
  { name: 'David Weil', date: 'May 2024', text: 'Courteous, thorough and thoughtful. Appreciate the attention to detail.' },
  { name: 'Justin Robinson', date: 'Apr 2024', text: '10/10 — great service from local people! After calling about 10 places, Mikkel was the only one who answered. He showed up fast and got the job done right.' },
  { name: 'Cat Black', date: 'Apr 2024', text: 'Mikkel is awesome! We called and got service the same day and it was very affordable. Plus there is a 30-day guarantee. He will be our go-to for all problems!' },
  { name: 'Anthony Salazar', date: 'Sep 2023', text: 'The only pest control you need in Tulsa!! Mikkel is wonderful to work with.' },
  { name: 'Fabiela Kemble', date: 'Jul 2023', text: 'I have had issues with ants every summer for as long as I can remember. One call to Pathfinder and the problem was completely gone. Amazing.' },
  { name: 'Nancy Howard', date: 'Sep 2022', text: 'This is the best company I have ever hired. I worked 35 years in the apartment business and never had a company as good as Pathfinder. I will always use them!' },
  { name: 'Andrea Stewart', date: 'Jul 2022', text: 'We\'ve had 2 applications of mosquito repellent and it has been such a relief for my family. We can be outdoors without being swarmed. Highly recommend!' },
  { name: 'Debra Canady', date: 'Jun 2022', text: 'We just purchased a new home and found out it was infested with roaches. Pathfinder made two visits and our problem is significantly improved. We will continue to use them.' },
  { name: 'Tate Freeman', date: 'Feb 2022', text: 'Lowest price, amazing service. Very effective. Exactly what a pest control company should be.' },
  { name: 'Jamie Masters', date: 'Mar 2020', text: 'I seriously cannot say enough about how amazing this company is. Mikkel has treated a few places for us and has always provided outstanding service and amazing results.' },
  { name: 'Candii Cannibal', date: 'Feb 2020', text: 'We had an issue with bed bugs in a large 4-bedroom house. Our lives have been so much better since we found Pathfinder Pest Control. Could not be more grateful!' },
  { name: 'Yvette Hart', date: 'May 2018', text: 'Mikkel is friendly, shows up on time, and gets the job done. Would recommend.' },
  { name: 'Greg Fennel', date: 'Apr 2017', text: 'Had them a few times on my jobs and they\'re the only one I call first! Great prices and great service. Will call them again for sure!' },
]

function StarRating() {
  return (
    <div className="flex gap-0.5 text-[#fdd20a]">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function getInitials(name: string) {
  return name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase()
}

const VISIBLE = 4

export default function ReviewsSection() {
  const [index, setIndex] = useState(0)
  const total = reviews.length
  const maxIndex = total - VISIBLE

  const prev = () => setIndex(i => Math.max(0, i - 1))
  const next = () => setIndex(i => Math.min(maxIndex, i + 1))

  return (
    <section className="py-20 bg-[#faf8ee]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-[#568d22] uppercase text-sm font-semibold tracking-widest mb-1">CUSTOMER REVIEWS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#112a44]">What Our Customers Say</h2>
          </div>
          {/* Google badge */}
          <div className="hidden sm:flex items-center gap-2 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100">
            <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-[#112a44] text-sm">5.0</span>
                <StarRating />
              </div>
              <p className="text-xs text-gray-500">Google Reviews</p>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex gap-5 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${index} * (25% + 5px * 4 / 4)))` }}
          >
            {reviews.map((r, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[calc(25%-15px)] min-w-[260px] bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col gap-3"
              >
                <StarRating />
                <p className="text-gray-600 text-sm leading-relaxed flex-grow line-clamp-4">"{r.text}"</p>
                <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-[#112a44] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {getInitials(r.name)}
                  </div>
                  <div>
                    <p className="font-semibold text-[#112a44] text-sm">{r.name}</p>
                    <p className="text-xs text-gray-400">{r.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8">
          <p className="text-sm text-gray-500">{index + 1}–{Math.min(index + VISIBLE, total)} of {total} reviews</p>
          <div className="flex items-center gap-4">
            <a
              href="https://g.page/r/CWjh5CqxFn_YEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-[#112a44] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#568d22] transition-colors"
            >
              Leave Us a Review
            </a>
            <div className="flex gap-3">
              <button
                onClick={prev}
                disabled={index === 0}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#112a44] hover:text-white hover:border-[#112a44] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                disabled={index >= maxIndex}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#112a44] hover:text-white hover:border-[#112a44] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Next"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile leave a review */}
        <div className="sm:hidden mt-6 text-center">
          <a
            href="https://g.page/r/CWjh5CqxFn_YEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#112a44] text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-[#568d22] transition-colors"
          >
            Leave Us a Review
          </a>
        </div>
      </div>
    </section>
  )
}
