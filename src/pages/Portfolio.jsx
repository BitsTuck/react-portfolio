import { useState } from 'react'


function Portfolio() {
    const heading = "Elizabeth Tucker Portfolio";
    const subhead = "Developer • Librarian • Student"

    return (
        <div class="container heading text-center">
            <div class="heading">
                <h2 class = "fs-1">
                    {heading}
                </h2>
                <p class = "fs-3">
                {subhead}
                </p> 
            </div>
        </div>

        
    );
}

export default Portfolio;