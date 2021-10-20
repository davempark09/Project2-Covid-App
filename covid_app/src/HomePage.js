import React from 'react'

function Homepage() {
    return (
        <div className="homepage">
            <div>
                <img src="/Header.jpg"/>
            </div>
            <div className="virusInfo">
                <h1>About the Virus</h1>
                <p>Coronavirus disease 2019 (COVID-19) is a contagious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). The first known case was identified in Wuhan, China, in December 2019. 
                The disease has since spread worldwide, leading to an ongoing pandemic. Symptoms of COVID-19 are variable, but often include fever, cough, headache, fatigue, breathing difficulties, and loss of smell and taste. 
                Symptoms may begin one to fourteen days after exposure to the virus. At least a third of people who are infected do not develop noticeable symptoms. Of those people who develop symptoms noticeable enough to be 
                classed as patients, most (81%) develop mild to moderate symptoms (up to mild pneumonia), while 14% develop severe symptoms (dyspnea, hypoxia, or more than 50% lung involvement on imaging), and 5% suffer critical
                symptoms (respiratory failure, shock, or multiorgan dysfunction). Older people are at a higher risk of developing severe symptoms. Some people continue to experience a range of effects (long COVID) for months after 
                recovery, and damage to organs has been observed.[16] Multi-year studies are underway to further investigate the long-term effects of the disease. COVID-19 transmits when people breathe in air contaminated by droplets 
                and small airborne particles containing the virus. The risk of breathing these in is highest when people are in close proximity, but they can be inhaled over longer distances, particularly indoors. Transmission can also 
                occur if splashed or sprayed with contaminated fluids in the eyes, nose or mouth, and, rarely, via contaminated surfaces. People remain contagious for up to 20 days, and can spread the virus even if they do not develop 
                symptoms. Several testing methods have been developed to diagnose the disease. The standard diagnostic method is by detection of the virus' nucleic acid by real-time reverse transcription polymerase chain reaction (rRT-PCR), 
                transcription-mediated amplification (TMA), or by reverse transcription loop-mediated isothermal amplification (RT-LAMP) from a nasopharyngeal swab. Preventive measures include physical or social distancing, quarantining, 
                ventilation of indoor spaces, covering coughs and sneezes, hand washing, and keeping unwashed hands away from the face. The use of face masks or coverings has been recommended in public settings to minimize the risk of 
                transmissions. While work is underway to develop drugs that inhibit the virus (and several vaccines for it have been approved and distributed in various countries, which have since initiated mass vaccination campaigns), 
                the primary treatment is symptomatic. Management involves the treatment of symptoms, supportive care, isolation, and experimental measures.</p>
                <a className="clickLinks" href="https://en.wikipedia.org/wiki/COVID-19">Click here for more information on the covid-19 virus itself.</a> </div>
            <div className="aboutInfo">
                <h1>About Us</h1>
                <p>We here working on the Covid Tracker believe that being well informed about the Covid virus is very important to the decision making of every individual. This idea that everyone should have equally free access to the information 
                    is why we have created this app in the hopes that people all over the world would use it and better inform themselves about the virus and their options before making any decision. We take great pride in the fact that we provide all
                    this information and resources to everyone at no cost in order to allow anyone and everyone to use it at their own leisure.</p>
                <a className="clickLinks" href="https://www.cdc.gov/coronavirus/2019-ncov/index.html">Click here for more information from the experts at the CDC</a></div>
        </div>
    )
}

export default Homepage
