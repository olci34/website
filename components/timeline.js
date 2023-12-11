import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Link,
  List,
  ListIcon,
  ListItem,
  Step,
  StepDescription,
  StepIndicator,
  StepSeparator,
  StepTitle,
  Stepper
} from '@chakra-ui/react'

const steps = [
  {
    title: 'CATIC',
    summary: 'Real estate title insurance company - Hartford, CT',
    descriptions: [
      'Re-architectured and migrated the legacy app to a new REST API .NET server and single page Angular app with +29k users.',
      'Enhanced database queries using T-SQL to boost efficiency that resulted ~20% response time.',
      'Integrated business partners` APIs to expand revenue sources, generated +$72k in 6 months.',
      'Transformed reusable Angular components and accelerated load time by utilizing lazy loading.',
      'Collaborated in an agile setting for technical design of backend and frontend features to ensure high-quality and consistent codebase.'
    ],
    startDate: '01/2022',
    endDate: 'Present',
    link: 'https://catic.com/'
  },
  {
    title: 'Atar Cabos',
    summary: 'Sailing School - Valencia, Spain',
    descriptions: [
      'Designed and developed the database schema and REST API using Ruby on Rails, utilized eager loading that increased response time 40%.',
      'Built a payment and emailing process using Stripe and SendGrid integration for a B2C, generated +€27k in 6 months.',
      'Implemented responsive UI with embedded Ruby templates and bootstrap, provided 30% faster load time with partial rendering and caching.'
    ],
    startDate: '06/2021',
    endDate: 'Present',
    link: 'https://atarcabos.com/'
  },
  {
    title: 'Flatiron School',
    summary: 'Full Stack Web Development Bootcamp - New York, NY',
    descriptions: [
      'Completed JavaScript React and Ruby on Rails full stack web development bootcamp in Flatiron School, NY.',
      'Equipped with strong knowledge of Object Oriented Programming, functional programming, web scraping, data modeling (ORM), RESTful API, design patterns, AJAX, single page applications, DOM, version control, SQL.',
      'Collaborated with classmates with React, Redux, Rails, Sinatra stack.'
    ],
    startDate: '01/2021',
    endDate: '05/2021',
    link: 'https://flatironschool.com/courses/coding-bootcamp/'
  },
  {
    title: 'Mobile App Development',
    summary: 'iOS Development with Swift UI',
    descriptions: [
      'Followed my curiosity of app development and self-learned Swift UI.',
      'Developed a multiple iOS apps as personal projects, utilized Google Cloud Storage.',
      'Contributed in building a feature for Moodivation app launched in App Store and also built a web control panel for admins using Ruby on Rails.'
    ],
    startDate: '05/2020',
    endDate: '03/2021',
    link: 'https://apps.apple.com/us/app/moodivation-daily-motivation/id1529743691'
  },
  {
    title: 'Relocate to US',
    summary: '',
    descriptions: [
      'Moved to US right after graduating to obtain certificates of import and export.',
      'Obtained TOEFL Certification.',
      'Drove Uber and Lyft for 5 years in NYC, which convinced me to follow my passion of software development.'
    ],
    startDate: '12/2015',
    endDate: '03/2021',
    link: undefined
  },
  {
    title: 'Istanbul University',
    summary: 'Bachelors of Engineering - Istanbul, Turkiye',
    descriptions: [
      'Graduated from Maritime Transportation and Management Engineering (BS) in Istanbul, Turkiye.',
      'Studied Statistics, Calculus, Differential Equations, MATLAB related to CS.'
    ],
    startDate: '09/2011',
    endDate: '07/2015',
    link: 'https://denizulastirmamuhendislik.iuc.edu.tr/en/'
  }
]

const Timeline = () => {
  return (
    <Box py={4}>
      <Stepper
        size="sm"
        orientation="vertical"
        gap={0}
        colorScheme="green"
        showLastSeparator={true}
      >
        {steps.map((step, index) => (
          <Step key={index} style={{ paddingBottom: '1rem' }}>
            <StepIndicator />

            <Box>
              <StepTitle>
                <Link href={step.link} target="_blank">
                  {step.title}
                </Link>
                <StepDescription
                  style={{ display: 'inline-block', marginLeft: '1em' }}
                >
                  {step.startDate} - {step.endDate}
                </StepDescription>
              </StepTitle>
              <StepDescription>{step.summary}</StepDescription>
              <List fontSize={['xs', 'xs', 'sm']}>
                {step.descriptions.map((desc, idx) => (
                  <ListItem key={idx}>
                    <ListIcon as={ChevronRightIcon} />
                    {desc}
                  </ListItem>
                ))}
              </List>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}

export default Timeline
