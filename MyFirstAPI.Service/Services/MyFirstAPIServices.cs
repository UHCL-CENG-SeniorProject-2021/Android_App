using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MyFirstAPIService.ViewModels;
using MyFirstAPIData.UOW;

namespace MyFirstAPI.Service.Services
{
    #region Interface 

    public interface IMyFirstAPIServices
    {
        public string GetFirstName();
        public IEnumerable<ButtonCategoryViewModel> GetAllButtons();
        public SoundViewModel GetSound(int wavelength, int size);
        public string AddButton(int id, string manipulation);
        public string AddSound(int waveLength, int size); //last paramter is going to be your sound
    }

    #endregion

    #region Interface Implementations

    public class MyFirstAPIServices
    {
        private readonly IMyFirstWebAPIUOW _myFirstWebAPIUOW;

        public MyFirstAPIServices(IMyFirstWebAPIUOW myFirstWebAPIUOW)
        {
            // Services is a middle man that gets data from the data project AND store data to the data project
            _myFirstWebAPIUOW = myFirstWebAPIUOW;
        }

        public string GetFirstName()
        {
            return "Mario";
        }

        public IEnumerable<ButtonCategoryViewModel> GetAllButtons()
        {
            // return data from MyFirstAPIData 
            // it will not do any sql queries here
        }

        public SoundViewModel GetSound (int wavelength, int size) 
        {
            _myFirstWebAPIUOW.SoundRepository;
        }
        public string Add(int id, string manipulation)
        {

        }

        public string AddSound(int waveLength, int size)
        {
            _myFirstWebAPIUOW.AddSound(waveLengthq, size);
            // tell the dat project to add the sound
        }
    }

    #endregion
}
