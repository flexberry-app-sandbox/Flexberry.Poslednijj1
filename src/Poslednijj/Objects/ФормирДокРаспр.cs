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
    /// Формир док распр.
    /// </summary>
    // *** Start programmer edit section *** (ФормирДокРаспр CustomAttributes)

    // *** End programmer edit section *** (ФормирДокРаспр CustomAttributes)
    [AutoAltered()]
    [Caption("Формирование документа распределений")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ФормирДокРаспрE", new string[] {
            "Дата as \'Дата\'",
            "НомерДокРаспр as \'Номер документа распределения\'",
            "ДокумПоставки as \'Номер документа поставки\'",
            "ДокумПоставки.Клиенты.Заказчик as \'Заказчик\'",
            "ДокумПоставки.Клиенты.АдресПоставки as \'Адрес поставки\'",
            "ДокумПоставки.Клиенты.Телефон as \'Телефон\'",
            "СписокБарж as \'Номер баржи\'",
            "ПунктПогрузки as \'Адрес погрузки\'",
            "СписокКонтей as \'Номер контейнера\'"})]
    [MasterViewDefineAttribute("ФормирДокРаспрE", "ДокумПоставки", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "НомДокПост")]
    [MasterViewDefineAttribute("ФормирДокРаспрE", "СписокБарж", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "НомерБаржи")]
    [MasterViewDefineAttribute("ФормирДокРаспрE", "ПунктПогрузки", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Адрес")]
    [MasterViewDefineAttribute("ФормирДокРаспрE", "СписокКонтей", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "НомерКонтей")]
    [View("ФормирДокРаспрL", new string[] {
            "Дата as \'Дата\'",
            "НомерДокРаспр as \'Номер документа распределения\'",
            "ДокумПоставки as \'Номер документа поставки\'",
            "СписокБарж.НомерБаржи as \'Номер баржи\'",
            "ПунктПогрузки.Адрес as \'Адрес погрузки\'",
            "СписокКонтей.НомерКонтей as \'Номер контейнера\'"})]
    [MasterViewDefineAttribute("ФормирДокРаспрL", "ДокумПоставки", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "НомерДокПост")]
    public class ФормирДокРаспр : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДата;
        
        private int fНомерДокРаспр;
        
        private IIS.Poslednijj.СписокБарж fСписокБарж;
        
        private IIS.Poslednijj.ПунктПогрузки fПунктПогрузки;
        
        private IIS.Poslednijj.СписокКонтей fСписокКонтей;
        
        private IIS.Poslednijj.ДокумПоставки fДокумПоставки;
        
        // *** Start programmer edit section *** (ФормирДокРаспр CustomMembers)

        // *** End programmer edit section *** (ФормирДокРаспр CustomMembers)

        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (ФормирДокРаспр.Дата CustomAttributes)

        // *** End programmer edit section *** (ФормирДокРаспр.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (ФормирДокРаспр.Дата Get start)

                // *** End programmer edit section *** (ФормирДокРаспр.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (ФормирДокРаспр.Дата Get end)

                // *** End programmer edit section *** (ФормирДокРаспр.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФормирДокРаспр.Дата Set start)

                // *** End programmer edit section *** (ФормирДокРаспр.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (ФормирДокРаспр.Дата Set end)

                // *** End programmer edit section *** (ФормирДокРаспр.Дата Set end)
            }
        }
        
        /// <summary>
        /// НомерДокРаспр.
        /// </summary>
        // *** Start programmer edit section *** (ФормирДокРаспр.НомерДокРаспр CustomAttributes)

        // *** End programmer edit section *** (ФормирДокРаспр.НомерДокРаспр CustomAttributes)
        public virtual int НомерДокРаспр
        {
            get
            {
                // *** Start programmer edit section *** (ФормирДокРаспр.НомерДокРаспр Get start)

                // *** End programmer edit section *** (ФормирДокРаспр.НомерДокРаспр Get start)
                int result = this.fНомерДокРаспр;
                // *** Start programmer edit section *** (ФормирДокРаспр.НомерДокРаспр Get end)

                // *** End programmer edit section *** (ФормирДокРаспр.НомерДокРаспр Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФормирДокРаспр.НомерДокРаспр Set start)

                // *** End programmer edit section *** (ФормирДокРаспр.НомерДокРаспр Set start)
                this.fНомерДокРаспр = value;
                // *** Start programmer edit section *** (ФормирДокРаспр.НомерДокРаспр Set end)

                // *** End programmer edit section *** (ФормирДокРаспр.НомерДокРаспр Set end)
            }
        }
        
        /// <summary>
        /// Формир док распр.
        /// </summary>
        // *** Start programmer edit section *** (ФормирДокРаспр.ДокумПоставки CustomAttributes)

        // *** End programmer edit section *** (ФормирДокРаспр.ДокумПоставки CustomAttributes)
        [PropertyStorage(new string[] {
                "ДокумПоставки"})]
        [NotNull()]
        public virtual IIS.Poslednijj.ДокумПоставки ДокумПоставки
        {
            get
            {
                // *** Start programmer edit section *** (ФормирДокРаспр.ДокумПоставки Get start)

                // *** End programmer edit section *** (ФормирДокРаспр.ДокумПоставки Get start)
                IIS.Poslednijj.ДокумПоставки result = this.fДокумПоставки;
                // *** Start programmer edit section *** (ФормирДокРаспр.ДокумПоставки Get end)

                // *** End programmer edit section *** (ФормирДокРаспр.ДокумПоставки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФормирДокРаспр.ДокумПоставки Set start)

                // *** End programmer edit section *** (ФормирДокРаспр.ДокумПоставки Set start)
                this.fДокумПоставки = value;
                // *** Start programmer edit section *** (ФормирДокРаспр.ДокумПоставки Set end)

                // *** End programmer edit section *** (ФормирДокРаспр.ДокумПоставки Set end)
            }
        }
        
        /// <summary>
        /// Формир док распр.
        /// </summary>
        // *** Start programmer edit section *** (ФормирДокРаспр.ПунктПогрузки CustomAttributes)

        // *** End programmer edit section *** (ФормирДокРаспр.ПунктПогрузки CustomAttributes)
        [PropertyStorage(new string[] {
                "ПунктПогрузки"})]
        [NotNull()]
        public virtual IIS.Poslednijj.ПунктПогрузки ПунктПогрузки
        {
            get
            {
                // *** Start programmer edit section *** (ФормирДокРаспр.ПунктПогрузки Get start)

                // *** End programmer edit section *** (ФормирДокРаспр.ПунктПогрузки Get start)
                IIS.Poslednijj.ПунктПогрузки result = this.fПунктПогрузки;
                // *** Start programmer edit section *** (ФормирДокРаспр.ПунктПогрузки Get end)

                // *** End programmer edit section *** (ФормирДокРаспр.ПунктПогрузки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФормирДокРаспр.ПунктПогрузки Set start)

                // *** End programmer edit section *** (ФормирДокРаспр.ПунктПогрузки Set start)
                this.fПунктПогрузки = value;
                // *** Start programmer edit section *** (ФормирДокРаспр.ПунктПогрузки Set end)

                // *** End programmer edit section *** (ФормирДокРаспр.ПунктПогрузки Set end)
            }
        }
        
        /// <summary>
        /// Формир док распр.
        /// </summary>
        // *** Start programmer edit section *** (ФормирДокРаспр.СписокБарж CustomAttributes)

        // *** End programmer edit section *** (ФормирДокРаспр.СписокБарж CustomAttributes)
        [PropertyStorage(new string[] {
                "СписокБарж"})]
        [NotNull()]
        public virtual IIS.Poslednijj.СписокБарж СписокБарж
        {
            get
            {
                // *** Start programmer edit section *** (ФормирДокРаспр.СписокБарж Get start)

                // *** End programmer edit section *** (ФормирДокРаспр.СписокБарж Get start)
                IIS.Poslednijj.СписокБарж result = this.fСписокБарж;
                // *** Start programmer edit section *** (ФормирДокРаспр.СписокБарж Get end)

                // *** End programmer edit section *** (ФормирДокРаспр.СписокБарж Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФормирДокРаспр.СписокБарж Set start)

                // *** End programmer edit section *** (ФормирДокРаспр.СписокБарж Set start)
                this.fСписокБарж = value;
                // *** Start programmer edit section *** (ФормирДокРаспр.СписокБарж Set end)

                // *** End programmer edit section *** (ФормирДокРаспр.СписокБарж Set end)
            }
        }
        
        /// <summary>
        /// Формир док распр.
        /// </summary>
        // *** Start programmer edit section *** (ФормирДокРаспр.СписокКонтей CustomAttributes)

        // *** End programmer edit section *** (ФормирДокРаспр.СписокКонтей CustomAttributes)
        [PropertyStorage(new string[] {
                "СписокКонтей"})]
        [NotNull()]
        public virtual IIS.Poslednijj.СписокКонтей СписокКонтей
        {
            get
            {
                // *** Start programmer edit section *** (ФормирДокРаспр.СписокКонтей Get start)

                // *** End programmer edit section *** (ФормирДокРаспр.СписокКонтей Get start)
                IIS.Poslednijj.СписокКонтей result = this.fСписокКонтей;
                // *** Start programmer edit section *** (ФормирДокРаспр.СписокКонтей Get end)

                // *** End programmer edit section *** (ФормирДокРаспр.СписокКонтей Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФормирДокРаспр.СписокКонтей Set start)

                // *** End programmer edit section *** (ФормирДокРаспр.СписокКонтей Set start)
                this.fСписокКонтей = value;
                // *** Start programmer edit section *** (ФормирДокРаспр.СписокКонтей Set end)

                // *** End programmer edit section *** (ФормирДокРаспр.СписокКонтей Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ФормирДокРаспрE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ФормирДокРаспрE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ФормирДокРаспрE", typeof(IIS.Poslednijj.ФормирДокРаспр));
                }
            }
            
            /// <summary>
            /// "ФормирДокРаспрL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ФормирДокРаспрL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ФормирДокРаспрL", typeof(IIS.Poslednijj.ФормирДокРаспр));
                }
            }
        }
    }
}
