import {Box, ListItem, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, UnorderedList, useStepperStyles, useSteps} from '@chakra-ui/react'

const steps = [
    { 
        title: 'CATIC', 
        descriptions: [
            'Re-architectured and migrated the legacy app to a new REST API .NET server and single page Angular app with +29k users.',
            'Enhanced database queries using T-SQL to boost efficiency that resulted ~20% response time.',
            'Integrated business partners` APIs to expand revenue sources, generated +$72k in 6 months.',
            'Transformed reusable Angular components and accelerated load time by utilizing lazy loading.',
            'Collaborated in an agile team for technical design reviews of backend and frontend to ensure high-quality and consistent codebase.'
        ], 
        startDate: '01/2022',
        endDate: 'Present' 
    },
    { 
        title: 'Atar Cabos', 
        descriptions: [
            
        ],
        startDate: '01/2022',
        endDate: 'Present' 
    },
    { title: 'CATIC3', descriptions: [], startDate: '01/2022', endDate: 'Present' },
    { title: 'CATIC4', descriptions: [], startDate: '01/2022', endDate: 'Present' },
]

const Timeline = () => {
    const { activeStep, setActiveStep } = useSteps({
        index: 1,
        count: steps.length,
      })

    return (
        <Box>
            <Stepper size='sm' index={activeStep} orientation='vertical' gap={0}>
                {steps.map((step, index) => (
                    <Step key={index} onClick={() => setActiveStep(index)}>
                        <StepIndicator>
                            <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
                        </StepIndicator>

                        <Box>
                            <StepTitle>{step.title}</StepTitle>
                            <StepDescription>
                                <UnorderedList>
                                    {step.descriptions.map(desc => (
                                        <ListItem>{desc}</ListItem>
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