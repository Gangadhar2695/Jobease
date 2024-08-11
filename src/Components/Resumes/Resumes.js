import "../Resumes/Resume.css";
import "../Java/Java.css";
import { Link } from "react-router-dom";
import FreeResumes from "../Freeresume/FreeResumes";

const Resumes = () => {
  return (
    <>
      <div className="resumes d-flex flex-row flex-wrap  gap-2 m-3 p-3">

        <div className="one-div py-4 text-start p-3">
          <h6 className="text-primary fw-bold text-center">Table of content</h6>
          <p><Link to="#">What is Resume</Link></p>
          <p><Link to="#">Resumes for freshers</Link></p>
          <p><Link to="#">Resumes for experienced</Link></p>
          <p><Link to="#">Important fields to be included</Link></p>
          <p><Link to="#">Resume importance</Link></p>
          <p><Link to="#">Free templates</Link></p>
          <p><Link to="#">paid templates</Link></p>
          <p><Link to="#">java importance</Link></p>
          <p><Link to="#">conclusion</Link></p>
        </div>

        <div className="two-div d-flex flex-column justify-content-start">

          <h3 className="text-dark fw-bold ">Resume Ideas and free ATS resume templates for 2024</h3>
          <div className="d-flex flex-row justify-content-between">
            <p className="fw-bold text-secondary"><span className="text-dark">By</span> Gangadhar</p>
            <p className="text-secondary fw-bold"><i class="fa-duotone fa-calendar-days"></i>20 june 2024</p>
          </div>

          <img className="java-img" src="https://static.jobscan.co/blog/uploads/resume-builder-examples.png" />

          <div>
            <h5 className="text-dark fw-bold fs-small mt-4">What is a Resume?</h5>
            <p>A resume is a brief summary of personal and professional experiences, skills, and education history.
              Its main purpose is to show off your best self to potential employers.
              When applying for a job, you’re (in most cases) going to be asked for a resume accompanied by a cover letter.</p>
            <h6 className="fw-bold">Sample Resume:</h6>
            <div className="bg-light">
              <img className="res ms-5" src="./images/res.png" alt="resume not found"
              />
            </div>

            <h4 className="fw-bold mt-4">Importance of a good resume?</h4>
            <p>A good resume is crucial for several reasons, as it serves as a key tool in the job search process. Here are some of the primary reasons why having a good resume is important:
              <br />
              <span className="text-dark fw-bold">1.First Impression:</span><br />Your resume is often the first impression a potential employer has of you. It's the document that introduces you before you even meet in person. A well-crafted resume can grab the attention of recruiters and make a positive first impression.<br />
              <span className="text-dark fw-bold">2.Showcases Qualifications:</span><br /> A resume allows you to showcase your qualifications, skills, and experiences relevant to the job you're applying for. It's your opportunity to highlight your education, work history, accomplishments, and any certifications or awards that make you a strong candidate.<br />
              <span className="text-dark fw-bold">3.Concised:</span><br />In a competitive job market, employers receive numerous applications for each job opening. A concise and well-organized resume makes it easier for hiring managers to quickly assess your qualifications and decide if you're worth further consideration.<br />
              <span className="text-dark fw-bold">4.Passes Through Applicant Tracking Systems (ATS):</span><br />Many companies use ATS software to screen resumes before they are ever seen by a human recruiter. An effective resume includes relevant keywords and formatting that can help you pass through these systems and reach the hands of a human reviewer.<br />
              <span className="text-dark fw-bold">5.Interview Selection:</span><br /> A good resume is often the ticket to getting invited for an interview. It piques the employer's interest and prompts them to want to learn more about you, leading to an interview opportunity.<br />
              <span className="text-dark fw-bold">6.Achievements:</span><br />Your resume serves as a record of your professional accomplishments and experiences over time. It's a valuable document not only for job searching but also for career planning and self-assessment.<br />
              <span className="text-dark fw-bold">7.Professionalism: </span><br />A well-crafted resume reflects your professionalism and attention to detail. It shows potential employers that you take your job search seriously and are committed to presenting yourself in the best possible light.
            </p>


            <h5 className="text-dark fw-bold fs-small">2.What is a cover letter?</h5>
            <p>A cover letter is a one-page document you send with your resume that provides additional
              information about skills and experiences related to the job you're pursuing. It typically
              includes three to four short paragraphs. A cover letter is important because it serves as the first chance for the recruiter to see the qualifications that make you a good fit for the position. Not every job application requires a cover letter, but it's a good idea to submit one. The extra effort not only shows the employer
              that you're serious about the job, but the letter differentiates you from other candidates.
            </p>
            <img className="cl" src="https://media.licdn.com/dms/image/D4E12AQGP6g1-WPghdQ/article-cover_image-shrink_720_1280/0/1698995720392?e=2147483647&v=beta&t=LtFIqNK2QFeAD_hu04koiYM1r22skVRB0FsA7zCm1tM" />

            <h5 className="text-dark fw-bold fs-small mt-4">Importance of a cover letter?</h5>
            <p>
              An impactful cover letter greatly strengthens your job application and ability to land interviews. Strategically highlight your top skills and accomplishments tailored to the company's needs. Follow standard business format and provide examples backing up your key qualifications.
              Proofread extensively. The effort you put into crafting and personalizing your cover letters signals genuineness regarding your interest in opportunities.  Pair it with an updated resume to put your best foot forward and stand out from the crowd.
            </p>

            <h5 className="text-dark fw-bold fs-small mt-4">Tips for writing a Impactful Cover Letter?</h5>
            <img src="https://www.uplers.com/wp-content/uploads/2023/07/Tips-For-Resume.jpg" alt="effective resume" className="effective"
            />
            <p>
              <span className="text-dark fw-bold">Tailor It for the Specific Job:</span><br />write a unique cover letter for every job you apply for. Thoroughly research the company and role to tailor your content accordingly. Point out how your skills and experience directly match what they are looking for in the job posting.<br />
              <span className="text-dark fw-bold">Highlight Top Qualifications:</span><br />Don't just repeat what's on your resume verbatim. Carefully select your top 3-4 hard and soft skills and achievements that apply to the role and showcase them prominently in the cover letter using real examples and metrics.<br />
              <span className="text-dark fw-bold">Follow Standard Business Letter Format:</span><br /><ul><li>Your contact information in header (name, phone number, email address)
              </li><li>Date you are writing letter
                </li><li>Hiring manager's name, title, company, and address
                </li><li>Appropriate opening salutation like "Dear [First Name] [Last Name],"
                </li><li>2-3 body paragraphs with concise content
                </li><li>Professional complimentary closing such as "Sincerely" or "Best regards"
                </li><li>Typed full name
                </li></ul>
              <span className="text-dark fw-bold">Use Strong Action Verbs and Adjectives:</span><br />Your choice of descriptive words reflects your communication ability. Inject powerful action verbs when describing your responsibilities and contributions. Adjectives emphasizing positive traits like "exceptional collaborator" or "creative problem-solver" also strengthen your profile.<br />
              <span className="text-dark fw-bold">Close by Requesting Next Steps:</span><br />Wrap up your letter by proactively asking for the next step in the hiring process. Reiterate your fit and enthusiasm for the role in a short, sincere paragraph. Then close by requesting an interview or stating your plan to follow up regarding your application status.
            </p>
            <img  src="./images/cv.webp" className=" cv2  ms-5" />

            <h5 className="text-dark fw-bold fs-small">Do I Need to Include a Photo on my Resume?</h5>
            <p>No, you don’t need to include your photo together with your other contact details. Companies hire based on merit, which means your physical appearance shouldn’t matter to the hiring manager..</p>
            <ul className="text-secondary">
              <li>Professional title</li>
              <li>Valid phone number</li>
              <li>Valid email address</li>
              <li>Location/where you’re based</li>
              <li>Link to website/LinkedIn/online portfolio, etc.</li>
            </ul>

            <h5 className="text-dark fw-bold fs-small">What to Put on a Resume?</h5>
            <p>The most common sections on a resume are:</p>
            <ul className="text-secondary">
              <li>Contact information</li>
              <li>Resume summary or objective</li>
              <li>Work experience</li>
              <li>Education</li>
              <li>Projects</li>
              <li>Volunteering experience</li>
              <li>Hobbies & interests</li>
              <li>Portfolio</li>
            </ul>


            <h5 className="text-dark fw-bold fs-small">How to Format a Resume?</h5>
            <p>Here are the three most popular resume formats:
              <ul><li>1.Chronological Resume</li>
                <li>2.Combinational Resume</li></ul>
            </p>


            <h5 className="text-dark fw-bold fs-small">How a Chronological Resume looks like?</h5>
            <p>The chronological resume follows a straightforward structure. The only thing to keep in mind is that your current or most recent experience - be it professional or educational - comes first.
              The second most recent will follow, and so on.<br />
              Here are the main and most popular sections for the chronological resume structure:
            </p>
            <ul className="text-secondary">
              <li>Contact information</li>
              <li>Professional Title and Summary</li>
              <li>Work experience and achievements</li>
              <li>Education section</li>
              <li>Your top soft/hard skills</li>
              <li>Include optional sections (languages, certificates, volunteer experience, etc)</li>
            </ul>
            <p>If you’re a recent college graduate and want to build your resume in the chronological structure format, you still can.
              All you have to do is rearrange the order of your resume sections so that the education resume section comes first.</p>


            <h5 className="text-dark fw-bold fs-small">What Are the Different Types of Skills?</h5>
            <p>Skills are of two types .They are</p>
            <ol>
            <li>Hard Skills</li>
            <li>Soft Skills</li>
            </ol>

            <h5 className="text-dark fw-bold fs-small">What are Hard Skills?</h5>
            <p>Hard skills involve the technical knowledge or know-how one can gain through experience, training, or education.<br/>
              <ol>
                <li><span>Computer skills </span></li>
                <li><span>Languages/communication skills</span></li>
                <li><span>Software skills</span></li>
               </ol>
             </p>


             <h5 className="text-dark fw-bold fs-small">What are Soft Skills?</h5>
            <p>The attributes and habits that describe how you work individually or with others are known as soft skills.<br/>
              <ol>
                <li>Time management</li>
                <li>Leadership</li>
                <li>Adaptability</li>
                <li>Communication</li>
                <li>Problem-solving</li>
                <li>Critical thinking</li>
                <li>Attention to detail</li>
                <li>Teamwork</li>
               </ol>
              <br />
             </p>
            </div>

          </div>


        <div className="three-div">
          <img src="https://venngage-wordpress.s3.amazonaws.com/uploads/2024/04/free-resume-templates-for-2024-blog-header.png" alt="java" />
          <button className="btn btn-success rounded-3 mt-4">Download PDF</button>

        </div>

      </div>
    </>
  );
}

export default Resumes;