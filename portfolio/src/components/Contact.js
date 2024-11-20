import { Github, Linkedin, Mail } from 'lucide-react';

const ContactSection = () => {

    return (
        <div className="flex">
            <a 
                href="https://github.com/gunnerdoh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full text-white me-3 bg-orange-800
                    hover:bg-white hover:text-black transition-colors"
            >
                <Github size={25} />
            </a>
            <a 
                href="https://linkedin.com/in/gunner-dohrenwend" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full text-white me-3 bg-linkedin-blue
                    hover:bg-white hover:text-black transition-colors"
            >
                <Linkedin size={25} />
            </a>
        </div>
    );
};

export default ContactSection;