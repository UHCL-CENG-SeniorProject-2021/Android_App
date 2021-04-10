using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DashboardData.Repositories;
using Microsoft.AspNetCore.Http;
using MyFirstAPIData.DataModels;

namespace MyFirstAPIData.UOW
{
    public interface IMyFirstWebAPIUOW
    {
        IRepository<UserInfoModel> UserInfoRepository { get; }
        IRepository<ButtonCategory> ButtonCategoryRepository { get; }
        IRepository<Sound> SoundRepository { get; }

        public void AddSound(int wavelength, int size);
    }

    public class MyFirstWebAPIUOW
    {
        private IRepository<ButtonCategory> _buttonCategoryRepository;
        private IRepository<ButtonCategory> _soundRepository;

        public MyFirstWebAPIUOW()
        {

        }

        public IRepository<ButtonCategory> ButtonCategoryRepository
        {
            get
            {
                return _buttonCategoryRepository ??= new Repository<ButtonCategory>();
            }
        }

        IRepository<Sound> SoundRepository 
        { 
            get
            {
                return _soundRepository ??= new Repository<Sound>();
            }

        }

        public void AddSound(int wavelength, int size)
        {
            // access database 
            // use entity framework 
            // entity framework will use sql to add your sound to the database
        }
    }
}
