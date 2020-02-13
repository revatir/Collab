# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: 'revati', email: "email1@gmail.com", password: '123')
user2 = User.create(username: 'adam', email: "email2@gmail.com", password: '123')
user3 = User.create(username: 'ori', email: "email3@gmail.com", password: '123')

company1 = Company.create(
                                   company_name: "Resolve",
                                   category_1: "Software",
                                   category_2: "Social Media",
                                   category_3: "Self-Help",
                                   about: "Resolve helps you track and share your personal and professsional goals.",
                                   unique: "We make reaching your goals a social activity!",
                                   website: "resolve.surge.sh",
                                   logo_url: "https://postimg.cc/8jq1Mkvt",
                                   user_id: 1,
                                   )
company2 = Company.create(
                                   company_name: "WeWork",
                                   category_1: "Real Estate",
                                   category_2: "Workspace",
                                   category_3: "",
                                   about: "WeWork designs and builds physical and virtual shared spaces and office services for entrepreneurs and companies.",
                                   unique: "Whether you’re an established enterprise or a growing startup, we build spaces that inspire your most impactful work.",
                                   website: "wework.com",
                                   logo_url: "https://yt3.ggpht.com/a/AGF-l78HuW5H6AUkZMf7AOMun9y4cR-1crdEYdEr=s900-c-k-c0xffffffff-no-rj-mo",
                                   user_id: 2,
                                   )
company3 = Company.create(
                                   company_name: "Compass",
                                   category_1: "Real Estate",
                                   category_2: "Workspace",
                                   category_3: "",
                                   about: "Compass is a licensed real estate broker that utilizes the Internet as a marketing medium with the use of real estate technology.",
                                   unique: "We were the first company to have built a proprietary mobile app for real estate agents!",
                                   website: "compass.com",
                                   logo_url: "https://i.pinimg.com/originals/ff/5a/74/ff5a746102c2fa2381c6a0ae80fbbfeb.jpg",
                                   user_id: 3,
                                   )

review = Review.create(
    review: "This company changed my life.",
    company_id: 1
    )