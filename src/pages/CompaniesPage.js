import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import TestimonialsSection from "../components/TestimonialsSection";

function CompaniesPage() {
    const CTA_LINK = "#/Contact";
    
    return (
        <>
            <Helmet>
                <title>Next Wave Dev - Companies</title>
            </Helmet>
            <Navbar />
            <div style={styles.container}>
                <h1 style={styles.mainHeading}>
                    For Companies – Secure Your Future Talent Pipeline
                </h1>

                <h2 style={styles.subHeading}>
                    Get Project Momentum and Identify Future Hires
                </h2>
                <p style={styles.paragraph}>
                    Are your junior developers overwhelmed? Do you have small, high-value projects 
                    waiting on the back burner? Next Wave Dev connects your business with enthusiastic, 
                    trained, and academically fresh graduates ready to deliver immediate value.
                </p>

                <h2 style={styles.subHeading}>
                    The Next Wave Advantage
                </h2>
                <p style={styles.paragraph}>
                    We provide a zero-risk way to address project needs while scouting high-potential 
                    talent before they hit the general job market.
                </p>

                <div style={styles.tableWrapper}>
                    <table style={styles.table}>
                        <tbody>
                            <tr>
                                <td style={styles.tdBold}>Project Acceleration:</td>
                                <td style={styles.td}>
                                    Get motivated and current talent to tackle projects like:
                                    <ul style={styles.list}>
                                        <li>Feature development and testing</li>
                                        <li>Documentation and code cleanup</li>
                                        <li>Internal tool creation</li>
                                        <li>Bug fixing and QA</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td style={styles.tdBold}>Risk-Free Talent Evaluation:</td> 
                                <td style={styles.td}>
                                    Assess a graduate’s work ethic, technical skills, and team fit over the course of a project. 
                                    It’s the ultimate extended interview.
                                </td>
                            </tr>
                            <tr>
                                <td style={styles.tdBold}>Cost-Effective Resource:</td>
                                <td style={styles.td}>
                                    Gain project support without the immediate overhead of a full-time hire.
                                </td>
                            </tr>
                            <tr>
                                <td style={styles.tdBold}>Current Skill Set:</td>
                                <td style={styles.td}>
                                    Our graduates bring the latest knowledge in modern programming languages and 
                                    frameworks directly from top academic programs.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 style={styles.subHeading}>
                    A Simple, Structured Partnership
                </h2>
                <div style={styles.tableWrapper}>
                    <table style={styles.table}>
                        <thead>
                            <tr>
                                <th style={styles.th}>Phase</th>
                                <th style={styles.th}>Our Role</th>
                                <th style={styles.th}>Your Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={styles.tdBold}>1. Definition</td>
                                <td style={styles.td}>We help you clearly define the project scope, required skills, and timelines.</td>
                                <td style={styles.td}>Provide project brief and required skill set.</td>
                            </tr>
                            <tr>
                                <td style={styles.tdBold}>2. Matching</td>
                                <td style={styles.td}>We vet, interview, and match you with the top 2-3 candidates whose skills align perfectly.</td>
                                <td style={styles.td}>Interview final candidates and select your team member(s).</td>
                            </tr>
                            <tr>
                                <td style={styles.tdBold}>3. Project</td>
                                <td style={styles.td}>We provide onboarding support and check-ins to ensure a smooth partnership.</td>
                                <td style={styles.td}>Provide mentorship, feedback, and integrate the graduate into your workflow.</td>
                            </tr>
                            <tr>
                                <td style={styles.tdBold}>4. Outcome</td>
                                <td style={styles.td}>You complete your project and have a vetted candidate pipeline.</td>
                                <td style={styles.td}>Decide whether to offer the graduate a full-time role.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 style={styles.subHeading}>
                    Invest in Development, Not Just Hiring
                </h2>
                <p style={styles.paragraph}>
                    We are committed to providing you with talent that is eager, capable, and ready to learn. Start solving your project challenges today and build your talent pipeline for tomorrow.
                </p>

                <a
                    href={CTA_LINK}
                    style={styles.ctaButton}
                    aria-label="Schedule a Call to Discuss Your Project Needs"
                >
                    Schedule a Call to Discuss Your Project Needs
                </a>
            </div>
            <TestimonialsSection />
            <Footer />
        </>
    );
}

const styles = {
    container: {
        padding: "5rem 5vw",
        maxWidth: "2200px",
        margin: "0 auto",
    },
    mainHeading: {
        fontSize: "3rem",
        fontWeight: "700",
        marginBottom: "1.5rem",
    },
    subHeading: {
        fontSize: "1.75rem",
        fontWeight: "700",
        marginTop: "2.5rem",
        marginBottom: "0.75rem",
    },
    paragraph: {
        fontSize: "1.2rem",
        lineHeight: "1.8",
        color: "#333",
    },
    tableWrapper: {
        overflowX: "auto",
        marginTop: "1.5rem",
        marginBottom: "2rem",
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
        minWidth: "700px",
    },
    th: {
        textAlign: "left",
        padding: "12px",
        borderBottom: "2px solid #ddd",
        fontWeight: "700",
    },
    td: {
        padding: "20px 12px",
        borderBottom: "1px solid #eee",
        fontSize: "1.1rem",
        lineHeight: "1.6",
    },
    tdBold: {
        padding: "20px 12px",
        borderBottom: "1px solid #eee",
        fontWeight: "700",
        fontSize: "1.1rem",
        verticalAlign: "top",
        width: "30%",
    },
    ctaButton: {
        display: "inline-block",
        marginTop: "1.5rem",
        padding: "14px 18px",
        borderRadius: "10px",
        textDecoration: "none",
        fontWeight: "700",
        fontSize: "1.1rem",
        border: "2px solid #0d6efd",
        color: "#0d6efd",
    },
    list: {
        margin: 0,
        paddingLeft: "1.25rem",
        lineHeight: "1.6",
    },
}

export default CompaniesPage;
