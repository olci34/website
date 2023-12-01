import {Box, ListItem, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, UnorderedList, useSteps} from '@chakra-ui/react'

const steps = [
    { 
        title: 'CATIC', 
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
        descriptions: [
            'Designed and developed the database schema and REST API using Ruby on Rails, utilized eager loading that increased response time 40%.',
            'Built a payment and emailing process using Stripe and SendGrid integration for a B2C, generated +€27k in 6 months.',
            'Implemented responsive UI with embedded Ruby templates and bootstrap, provided 30% faster load time with partial rendering and caching.'
        ],
        startDate: '06/2021',
        endDate: 'Present',
        link: 'https://atarcabos.com/'
    }
]

const Timeline = () => {
    const { activeStep, setActiveStep } = useSteps({
        index: 1,
        count: steps.length,
      })

    return (
        <Box>
            <Stepper size='sm' index={activeStep} orientation='vertical' gap={2}>
                {steps.map((step, index) => (
                    <Step key={index} onClick={() => setActiveStep(index)}>
                        <StepIndicator>
                            <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
                        </StepIndicator>

                        <Box>
                            <StepTitle>{step.title}</StepTitle>
                            <StepDescription>
                                <UnorderedList>
                                    {step.descriptions.map((desc, idx) => (
                                        <ListItem key={idx}>{desc}</ListItem>
                                    ))}
                                </UnorderedList>
                            </StepDescription>
                        </Box>

                        <StepSeparator />
                    </Step>
                ))}
            </Stepper>
        </Box>
    )
}

export default Timeline