import './App.css';



const App = () => {
    return <div className='app-wrapper'>

        <header className='header'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png' alt=''/>
        </header>

        <nav className='nav'>
            <div><a href="#">Profile</a></div>
            <div><a href="#">Messages</a></div>
            <div><a href="#">News</a></div>
            <div><a href="#">Music</a></div>
            <div><a href="#">Settings</a></div>
        </nav>

        <div className='content'>

            <div>
                <img src="https://miro.medium.com/max/1200/1*HsFBOH0ncItzjWJgLIuVIg.png" alt=""/>
            </div>

            <div>
                ava +discriptiion
            </div>

            <div>
                My Posts
                <div>New Post</div>

                <div>
                    <div>Post1</div>
                    <div>Post2</div>
                </div>
            </div>
        </div>

    </div>
};

export default App;
