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
      'Engineered and maintained solutions for a number of .NET 6+ REST APIs and Angular single page applications (SPA) that are hosted in Azure cloud-based Service Oriented Architecture (SOA), and used by +30k users.',
      'Refactored data models with Entity Framework ORM (EF 5+) and generated performant relational database queries in T-SQL using SQL Server (RDBMS) that resulted in ~20% faster response time.',
      'Scoped and led complex third party integration projects to expand revenue resources, generating +$72k in 6 months.',
      'Built reusable Angular (v15+) components, utilized lazy loading and caching to accelerate load time. Adhered to Akita state management pattern. Applied UI frameworks like Bootstrap, Angular Material, Tailwind CSS for styling.',
      'Collaborated with other engineers for technical design and implementation of new features across the stack (backend, frontend and database).',
      'Utilized Azure pipeline tools to manage CI/CD process that improve software development life cycle (SDLC) reliability.'
    ],
    startDate: '01/2022',
    endDate: 'Present',
    link: 'https://catic.com/'
  },
  {
    title: 'Atar Cabos',
    summary: 'Sailing School - Valencia, Spain',
    descriptions: [
      'Architected and developed the database schema and REST API using Ruby on Rails, utilized eager loading with Active Record queries that increased response time by 40%.',
      'Implemented a robust payment and email process for a B2C platform integrating Stripe and SendGrid, generating over €27k within 6 month.',
      'Designed a responsive UI with embedded Ruby templates and Bootstrap, provided 30% faster load time with partial rendering and caching.'
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
