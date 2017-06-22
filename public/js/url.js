/**
 * Created by bai on 2016/12/6.
 */
var hashurl = {
        //项目管理操作，添加或编辑，不同入口拿到不同数据，执行不同的 保存 取消 操作
        staffManagement: {
            'default': 'onjob',
            onjob: '/staffManagement/onjob',
            leaveJob: '/staffManagement/leaveJob',
            waitEntry: '/offerManagement/waitEntry',

            showBasicInfo: '/staff/showBasicInfo',
            showPostion: '/staff/showPostion',
            showSalary: '/staff/showSalary',
            showHistory: '/staff/showHistory',
            showAttachment: '/staff/showAttachment',

            trepidate: '/staffManagement/trepidate',
            leaveOffice: '/staffManagement/leaveOffice',
            delStaff: '/staffManagement/delStaff',
            staffFormal: '/staffManagement/staffFormal',
            newInput: '/staffManagement/newInput',

            showLeaveInfo: '/staff/showLeaveInfo',
            showLeaveBasic: '/staff/showLeaveBasic',
            showLeavePostion: '/staff/showLeavePostion',
            showLeaveSalary: '/staff/showLeaveSalary',
            showLeaveHistory: '/staff/showLeaveHistory',
            showLeaveAttachment: '/staff/showLeaveAttachment',

        },

        companyInfo: {
            'default': 'clientInfo',
            clientInfo: '/companyInfo/clientInfo',
            orderList: '/companyInfo/orderList',
            customerDemand: '/companyInfo/customerDemand',
            Organigramme: '/companyInfo/organigramme',
            remark: '/companyInfo/remark',
            setClient: '/companyInfo/setClient',
            newOrder: '/companyInfo/order/showAddOrder',
            employeeList: '/companyInfo/employeeList',
            salaryHistory: '/companyInfo/salaryHistory',
            historyDetail: '/historyPay/historyDetail',

            showBasicInfo: '/staff/showBasicInfo',
            showPostion: '/staff/showPostion',
            showSalary: '/staff/showSalary',
            showHistory: '/staff/showHistory',
            showAttachment: '/staff/showAttachment',

            showLeaveInfo: '/staff/showLeaveInfo',
            showLeaveBasic: '/staff/showLeaveBasic',
            showLeavePostion: '/staff/showLeavePostion',
            showLeaveSalary: '/staff/showLeaveSalary',
            showLeaveHistory: '/staff/showLeaveHistory',
            showLeaveAttachment: '/staff/showLeaveAttachment',

        },

        projectManagement: {
            'default': 'serviceIng',
            serviceIng: '/projectManagement/serviceIng',
            serviceWait: '/projectManagement/serviceWait',
            servicePause: '/projectManagement/servicePause',
            serviceComplete: '/projectManagement/serviceComplete'

        }
        ,

        salesManagement: {
            'default': 'beforeApproval',
            beforeApproval: '/salesManagement/beforeApproval',
            approvaling: '/salesManagement/approvaling',
            afterApproval: '/salesManagement/afterApproval'
        }
        ,

        reviewManagement: {
            'default': 'myReview',
            myReview: '/reviewManagement/myReview',
            hadReview: '/reviewManagement/hadReview'
        }
        ,

        offerManagement: {
            'default': 'offer',
            offer: '/offerManagement/offer',
            waitEntry: '/offerManagement/waitEntry',
            entryHistory: '/offerManagement/entryHistory',
            offerDetail: '/offerManagement/offerDetail',
            rejected: '/offerManagement/rejected',
            addWaitEntry: '/offerManagement/addWaitEntry',
            tabOfferDetailInfo: '/offerManagement/tabOfferDetailInfo',
            sendRegister: '/offerManagement/showSendRegister',
            sendLetter: '/offerManagement/showSendLetter',
            newInput: '/staffManagement/newInput',
            registryLook: '/offerManagement/registryLook',
        }
        ,

        offerInfo: {
            'default': 'writeInfo',
            writeInfo: '/offerInfo/writeInfo',
            produceAttachment: '/offerInfo/produceAttachment',
            sendOffer: '/offerInfo/sendOffer',
        }
        ,

        payroll: {
            'default': 'attendance',
            variableCost: '/payroll/variableCost',
            wageDetails: '/payroll/wageDetails',
            exportWageList: '/payroll/wageDetails/exportWageList',
            attendance: '/payroll/attendance'
        }
        ,

        historyPay: {
            'default': 'historyList',
            historyList: '/historyPay/historyList',
            historyDetail: '/historyPay/historyDetail'
        }
        ,

        customerRecord: {
            'default': 'showCurrentRecord',
            showCurrentRecord: '/customerRecord/showCurrentRecord',
            showSetRecord: '/customerRecord/showSetRecord',
            showHistoryRecord: '/customerRecord/showHistoryRecord',

            showSubmissions: '/customerRecord/showSubmissions',
            saveTemplate: '/customerRecord/saveTemplate'
        }
        ,
        account: {
            'default': 'accountlist',
            accountlist: 'account/accountlist',
            stoplist: 'account/stoplist',
        },


        staff: {
            'default': 'information',
            information: 'staff/information',
            organizing: 'staff/organizing',
            append: '/staff/append',
            excelSet: '/staff/excelSet',
            showBasic: '/staff/showBasic',
            showPostion: '/staff/showPostion',
            list: '/staff/basicInfo',
            newList3: '/staff/newList3',
            newList4: '/staff/newList4',
            newList5: '/staff/newList5',
            prodation: '/staff/prodation',
            depart: '/leave/show',
            getRro: '/proda/getRro',
            getheader: '/staff/getheader',
            getleader: '/staff/getleader',
            //view
            newView1: '/staff/newView1',
            newView2: '/staff/newView2',
            newView3: '/staff/newView3',
            newView4: '/staff/newView4',
            newView5: '/staff/newView5',
            viewtTemporarily: '/staff/viewtTemporarily',
        }
        ,

        'system/ordersIndex': {
            'default': 'curOrder',
            curOrder: '/system/curOrder',
            historyOrder: '/system/historyOrder',

        }
        ,
        'system/messagesIndex': {
            'default': 'allMessage',
            companyMessage: '/system/companyMessage',
            allMessage: '/system/allMessage',
            messageLog: '/system/messageLog'

        },

        'system/templateIndex': {
            'default': 'entry',
            entry: '/system/templateIndex/entry',
            formal: '/system/templateIndex/formal',
            prodation: '/system/templateIndex/prodation',
            leave: '/system/templateIndex/leave',
            html: '/system/templateIndex/html'
        },

        'menuRuleManagement/menuManagement': {
            'default': 'onList',
            onList: '/menuRuleManagement/menuManagement/onList',
            offList: '/menuRuleManagement/menuManagement/offList',
        },

        myProject: {
            'default': 'serviceIng',
            serviceIng: '/myProject/serviceIng',
            serviceWait: '/myProject/serviceWait',
            servicePause: '/myProject/servicePause',
            serviceComplete: '/myProject/serviceComplete'

        },
        companyTemplate: {
            'default': 'normal',
            normal: '/companyTemplate/normal',
            html: '/companyTemplate/html'
        },

        'systemSetting': {
            'default': 'insuranceCity',
            insuranceCity: '/systemSetting/insuranceCity',
            pushMsg: '/systemSetting/pushMsg',
        },

    }
    ;
