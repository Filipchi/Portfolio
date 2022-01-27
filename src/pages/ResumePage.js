import React from 'react';
import { MainLayout} from '../styles/Layouts';
import Resume from '../components/Resume';
import Skills from '../components/Skills';

function ResumePage() {
    return (
        <MainLayout>
            <Skills />
            <Resume />
        </MainLayout>
    )
}

export default ResumePage
