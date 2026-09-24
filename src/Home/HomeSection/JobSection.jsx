
const JobSection = () => {

    const jobs = [
        {
            jobTitle: "System Developer",
            companyName: "Strapi.Inc",
            location: "Nyeri",
            dicretion: "Full Time",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio ducimus omnis minus commodi rerum alias molestiae doloremque minima voluptate hic laudantium possimus voluptatibus, tempore magnam quod quas voluptas sed beatae dolore facilis"
        },
        {
            jobTitle: "Frontend Developer",
            companyName: "TechCraft Solutions",
            location: "Nairobi",
            dicretion: "Full Time",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto libero magnam corrupti temporibus sequi sapiente eaque ad inventore aut minima, mollitia amet veritatis quo, accusamus distinctio."
        },
        {
            jobTitle: "UI/UX Designer",
            companyName: "Pixel Studio",
            location: "Mombasa",
            dicretion: "Contract",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas alias aut asperiores placeat tempore. Harum, obcaecati est perferendis praesentium distinctio accusamus dolorum eaque."
        },
        {
            jobTitle: "Backend Engineer",
            companyName: "CloudScale Systems",
            location: "Remote",
            dicretion: "Full Time",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat minus omnis corporis debitis est unde ad distinctio eaque nostrum facilis eligendi culpa, aut vel!"
        },
        {
            jobTitle: "Data Analyst",
            companyName: "InfoMetrics",
            location: "Nakuru",
            dicretion: "Part Time",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eaque magnam tempore excepturi amet voluptatem ducimus corporis alias sapiente. Repellat culpa id accusamus ex aliquid."
        },
        {
            jobTitle: "DevOps Engineer",
            companyName: "Pipeline Technologies",
            location: "Nairobi",
            dicretion: "Full Time",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae reiciendis corrupti ab aut aliquid veritatis id tempora perferendis magnam non sint, dolorem facilis aspernatur voluptatum."
        },
        {
            jobTitle: "Mobile App Developer",
            companyName: "AppVibe Labs",
            location: "Kisumu",
            dicretion: "Contract",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae dolorum cumque amet inventore commodi quod perferendis sint laboriosam cupiditate unde non, accusamus qui voluptatem!"
        },
        {
            jobTitle: "Cybersecurity Analyst",
            companyName: "SecureNet Kenya",
            location: "Nairobi",
            dicretion: "Full Time",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio error mollitia corporis inventore eaque expedita placeat ad sint recusandae iure architecto aut, sapiente minima."
        },
        {
            jobTitle: "QA Test Engineer",
            companyName: "QualityFirst",
            location: "Eldoret",
            dicretion: "Full Time",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nesciunt hic voluptatibus harum velit excepturi distinctio cupiditate corporis facilis magnam unde, omnis eligendi dolor tempora."
        },
        {
            jobTitle: "Full Stack Developer",
            companyName: "Apex Software",
            location: "Remote",
            dicretion: "Full Time",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ducimus asperiores nostrum provident corporis cupiditate sint est praesentium at corrupti minus tempora vel, rem architecto."
        },
        {
            jobTitle: "Database Administrator",
            companyName: "DataBank Corp",
            location: "Thika",
            dicretion: "Part Time",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta corporis distinctio dolor cupiditate ex laboriosam harum amet architecto placeat molestiae eaque aspernatur, impedit alias voluptatem."
        },
        {
            jobTitle: "Product Manager",
            companyName: "InnoWave Solutions",
            location: "Nairobi",
            dicretion: "Full Time",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ad veritatis molestiae accusamus architecto voluptatum recusandae non, illum praesentium minima distinctio hic error nihil debitis!"
        },
        {
            jobTitle: "Cloud Solutions Architect",
            companyName: "SkyHigh Systems",
            location: "Nyeri",
            dicretion: "Contract",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ducimus ex, ad harum alias sapiente doloremque asperiores accusamus magnam amet voluptatem error mollitia id corrupti."
        }
    ];

    return (
        <div>
            <div className="container my-2">
                <h4 className="text-center">
                    Latest <span className="border-bottom border-3 border-primary p-2">Job</span> Vacancies
                </h4>
                <p className="my-3 text-center text-muted">
                    Search and Find your dream job easily. Just browse a job and apply if you need to.
                    They are waiting for your skills
                </p>
            </div>
        </div>
    );
}

export default JobSection;