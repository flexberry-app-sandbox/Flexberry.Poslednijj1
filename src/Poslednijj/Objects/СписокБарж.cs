﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Poslednijj
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Список барж.
    /// </summary>
    // *** Start programmer edit section *** (СписокБарж CustomAttributes)

    // *** End programmer edit section *** (СписокБарж CustomAttributes)
    [AutoAltered()]
    [Caption("Список барж")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СписокБаржE", new string[] {
            "НомерБаржи as \'Номер баржи\'",
            "Производитель as \'Производитель\'"})]
    [View("СписокБаржL", new string[] {
            "НомерБаржи as \'Номер баржи\'",
            "Производитель as \'Производитель\'"})]
    public class СписокБарж : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомерБаржи;
        
        private string fПроизводитель;
        
        // *** Start programmer edit section *** (СписокБарж CustomMembers)

        // *** End programmer edit section *** (СписокБарж CustomMembers)

        
        /// <summary>
        /// НомерБаржи.
        /// </summary>
        // *** Start programmer edit section *** (СписокБарж.НомерБаржи CustomAttributes)

        // *** End programmer edit section *** (СписокБарж.НомерБаржи CustomAttributes)
        public virtual int НомерБаржи
        {
            get
            {
                // *** Start programmer edit section *** (СписокБарж.НомерБаржи Get start)

                // *** End programmer edit section *** (СписокБарж.НомерБаржи Get start)
                int result = this.fНомерБаржи;
                // *** Start programmer edit section *** (СписокБарж.НомерБаржи Get end)

                // *** End programmer edit section *** (СписокБарж.НомерБаржи Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СписокБарж.НомерБаржи Set start)

                // *** End programmer edit section *** (СписокБарж.НомерБаржи Set start)
                this.fНомерБаржи = value;
                // *** Start programmer edit section *** (СписокБарж.НомерБаржи Set end)

                // *** End programmer edit section *** (СписокБарж.НомерБаржи Set end)
            }
        }
        
        /// <summary>
        /// Производитель.
        /// </summary>
        // *** Start programmer edit section *** (СписокБарж.Производитель CustomAttributes)

        // *** End programmer edit section *** (СписокБарж.Производитель CustomAttributes)
        [StrLen(255)]
        public virtual string Производитель
        {
            get
            {
                // *** Start programmer edit section *** (СписокБарж.Производитель Get start)

                // *** End programmer edit section *** (СписокБарж.Производитель Get start)
                string result = this.fПроизводитель;
                // *** Start programmer edit section *** (СписокБарж.Производитель Get end)

                // *** End programmer edit section *** (СписокБарж.Производитель Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СписокБарж.Производитель Set start)

                // *** End programmer edit section *** (СписокБарж.Производитель Set start)
                this.fПроизводитель = value;
                // *** Start programmer edit section *** (СписокБарж.Производитель Set end)

                // *** End programmer edit section *** (СписокБарж.Производитель Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СписокБаржE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СписокБаржE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СписокБаржE", typeof(IIS.Poslednijj.СписокБарж));
                }
            }
            
            /// <summary>
            /// "СписокБаржL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СписокБаржL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СписокБаржL", typeof(IIS.Poslednijj.СписокБарж));
                }
            }
        }
    }
}
