import Profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between p-4 m-4 border-b-2'>
            <h1 className='text-4xl font-bold '>Knowledge cafe</h1>
            <img src={Profile} alt="" />
        </header>
    );
};

export default Header;