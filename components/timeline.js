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
    title: 'CATIC (C#, Python, TypeScript, Angular, .NET 6+)',
    summary:
      'National title insurance underwriting company that helps real estate attorneys and over 30,000 independent title agencies in the closing process, ranked 9th largest in the US.',
    descriptions: [
      'Optimized database queries (SQL Server) through indexing, query partitioning and nonlocking that resolved low concurrency and slow query delays. Reduced latency 92%.',
      'Utilized a message queue broker (Azure Service Bus) that mitigated error rate 17%, enabled analyzing and recovering failed requests between services.',
      'Engineered and maintained solutions for a number of .NET 6+ REST APIs and Angular single page applications (SPA) that are hosted in Azure cloud-based Service Oriented Architecture (SOA), and used by +30k users.',
      'Scoped seamless integration projects, generating $7.3M annualy in revenue.',
      'Diagnosed data redundancy and saved $22,000 annually in storage costs by normalizing the database schema (EF 5+), addressing inefficient resource utilization.',
      'Overhauled deprecated UI modules, resolving the bottleneck of dependency management and upgrading to Angular v16. Boosted page load time 12%.',
      'Led design and implemented a customer-facing order tracking feature (.NET 6+, Angular v15+) that increased user retention 10% and drew 35,000 more requests per day.'
    ],
    startDate: '01/2022',
    endDate: 'Present',
    link: 'https://catic.com/'
  },
  {
    title: 'Atar Cabos (Ruby on Rails, Python, JavaScript)',
    summary:
      'Sailing academy that offers hands-on, practical courses along with an online study platform for flexible learning.',
    descriptions: [
      'Improved query execution performance 40% through ORM (Active Record) eager loading, addressing N+1 query issues that caused network overhead and bottleneck for scaling.',
      'Employed partial rendering and caching (Ruby on Rails) to enhance mobile user engagement. Reduced bounce rate 27% and increased user acquisition rate 8%.',
      'Automated a reliable payment process (Stripe) and email notification system (SendGrid) to streamline scaling and reducing operational overhead. Raised conversion rate by 30%.'
    ],
    startDate: '06/2021',
    endDate: '01/2022',
    link: 'https://atarcabos.com/'
  },
  {
    title: 'Flatiron School',
    summary: 'Full Stack Web Development Certification - New York, NY',
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
    title: 'Istanbul University',
    summary: 'Bachelor of Engineering - Istanbul, Turkiye',
    descriptions: [
      'Graduated from Maritime Transportation and Management Engineering (BS) in Istanbul, Turkiye.',
      'Completed studies on Statistics, Calculus, Linear Algebra, Discrete Mathematics, Differential Equations, MATLAB, Physics'
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
