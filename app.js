function openTab(evt, tabName) {
  var tabcontent = document.getElementsByClassName("tab-content");
  var tablinks = document.getElementsByClassName("tab-links");
  var tab = document.querySelector(".tab");
  var selectedIndex = Array.prototype.indexOf.call(tablinks, evt.currentTarget);
  var progressPercent = ((selectedIndex + 1) / tablinks.length) * 100;

  for (var i = 0; i < selectedIndex; i++) {
      tablinks[i].classList.add("active");
  }

  for (var i = selectedIndex + 1; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
  }

  for (var i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("show");
  }

  evt.currentTarget.classList.add("active");
  document.getElementById(tabName).classList.add("show");
  tab.style.setProperty("--progress-width", (progressPercent + 2) + "%");
}

const PROJECT_DEMO = {
    id: 'ZocS2K2mLgtYho_u2vJob',
    businessName: 'Benfatto Organiza',
    name: 'Projeto demonstrativo',
    status: 'Aprovado',
    clientName: 'Irene Loureiro',
    clientPhone: '1137746606',
    clientEmail: 'contato@organizesuavida.com.br',
    employeeName: '',
    dailyJourneyTime: 7,
    creationDate: '30/07/2023 13:30',
    startDate: '01/08/2023 13:00',
    endDate: '03/08/2023 18:00',
    proposalSendDate: '31/07/2023 17:33',
    proposalAcceptDate: '31/07/2023 20:33',
    observations: '',
    costDinamicVariables: [
        {
            id: 'l5yg5Hc5bpEPy2UgfKg2B',
            name: 'Gasolina',
            value: 'R$ 10,00',
        },
        {
            id: 'HpHEcOwyt2WM1KP0o2_A3',
            name: 'Aplicativo',
            value: 'R$ 10,00',
        },
        {
            id: 'AXei272w2Pi2TWAj7t_37',
            name: 'Estacionamento',
            value: 'R$ 10,00',
        },
        {
            id: 'eC8tJW_iNH9ZrCtcNStEk',
            name: 'Taxa de deslocamento',
            value: 'R$ 10,00',
        },
        {
            id: 'L1VZ5AhvDUkbd99QhmKuZ',
            name: 'Alimentação Organizador',
            value: 'R$ 25,00',
        },
    ],
    costMaterialVariables: [
        {
            id: 'VJzmMdUWnr0JXZg1AlteP',
            name: 'Luva organizador',
            quantity: 18,
            value: 'R$ 1,15',
        },
        {
            id: 'pEqC47cvlTLHfTltqVgPc',
            name: 'Protetor',
            quantity: 18,
            value: 'R$ 1,00',
        },
        {
            id: 'BFOVBjboOfz6RgqC7hNoU',
            name: 'Fita Mtape',
            quantity: 0.5,
            value: 'R$ 90,00',
        },
        {
            id: '_Yu1QH2zj7KIzkMYGtaR8',
            name: 'Gabaritos',
            quantity: 2,
            value: 'R$ 25,00',
        },
    ],
    costActivityVariables: [
        {
            id: 'W0JFi5_OfRghjyXCnxHlq',
            name: 'Compra de produto organizador',
            value: 2,
        },
        {
            id: 'P9_mdF5ePBCBQ4xGQphXU',
            name: 'Treinamento do cliente ou responsável',
            value: 3,
        },
        {
            id: 'PFymP4WjUq0cGzSgWGBA_',
            name: 'Tarefas de finalização do Projeto',
            value: 2,
        },
        {
            id: 'PXJC4kmfL5zBypyphFWNs',
            name: 'Retorno: Visita de aplicabilidade',
            value: 1,
        },
    ],
    environments: [
        {
            name: 'Quarto casal',
            description: '',
            checklist: [
                {
                    name: 'Item 1',
                    checked: true,
                },
                {
                    name: 'Item 1',
                    checked: true,
                },
                {
                    name: 'Item 1',
                    checked: true,
                },
                {
                    name: 'Item 1',
                    checked: false,
                },
                {
                    name: 'Item 1',
                    checked: false,
                },
            ],
            spaces: [
                {
                    id: 'L40Dg8ackavUxO81JDF0Y',
                    name: 'Closet',
                    contacts: [
                        {
                            id: '8OWnMu80Bohw4ZYSISmqW',
                            userId: '',
                            name: 'Irene Loureiro',
                            serviceType: 'Presencial',
                            priceType: 'Hora',
                            serviceHours: 10,
                            price: 'R$ 100,00',
                            startAt: '00/00/00 00:00',
                            endAt: '00/00/00 00:00',
                            startedAt: '00/00/00 00:00',
                            endedAt: '00/00/00 00:00',
                        },
                        {
                            id: 'tgCmceEmdtORwKbUOg6SU',
                            userId: '',
                            name: 'Suzana Ribeiro',
                            type: 'partner',
                            serviceType: 'Presencial',
                            priceType: 'Hora',
                            serviceHours: 10,
                            price: 'R$ 100,00',
                            startAt: '00/00/00 00:00',
                            endAt: '00/00/00 00:00',
                            startedAt: '00/00/00 00:00',
                            endedAt: '00/00/00 00:00',
                        }
                    ]
                },
            ],
        },
        {
            name: 'Quarto infantil',
            description: '',
            checklist: [
                {
                    name: 'Item 1',
                    checked: true,
                },
                {
                    name: 'Item 1',
                    checked: true,
                },
                {
                    name: 'Item 1',
                    checked: true,
                },
                {
                    name: 'Item 1',
                    checked: false,
                },
                {
                    name: 'Item 1',
                    checked: false,
                },
            ],
            spaces: [
                {
                    id: 'c9kdLMSKvBe2L6zS8vur_',
                    name: 'Closet',
                    contacts: [
                        {
                            id: 'hBEehvEvExa7dci26winB',
                            name: 'Irene Loureiro',
                            serviceType: 'Presencial',
                            priceType: 'Hora',
                            serviceHours: 10,
                            price: 'R$ 100,00',
                            startAt: '00/00/00 00:00',
                            endAt: '00/00/00 00:00',
                            startedAt: '00/00/00 00:00',
                            endedAt: '00/00/00 00:00',
                        },
                        {
                            id: 'rHotXRLibwzxfNZ9lqGZR',
                            name: 'Suzana Ribeiro',
                            type: 'partner',
                            serviceType: 'Presencial',
                            priceType: 'Hora',
                            serviceHours: 10,
                            price: 'R$ 100,00',
                            startAt: '00/00/00 00:00',
                            endAt: '00/00/00 00:00',
                            startedAt: '00/00/00 00:00',
                            endedAt: '00/00/00 00:00',
                        }
                    ]
                },
            ],
        },
    ],
};

const PROJECT_BLANK = {
    businessName: '',
    name: 'Nome do projeto',
    status: '',
    clientName: 'Nome do cliente',
    clientPhone: '',
    clientEmail: '',
    employeeName: '',
    dailyJourneyTime: 7,
    creationDate: '',
    startDate: '',
    endDate: '',
    proposalSendDate: '',
    proposalAcceptDate: '',
    observations: '',
    costDinamicVariables: [
        {
            id: 'l5yg5Hc5bpEPy2UgfKg2B',
            name: 'Gasolina',
            value: 'R$ 10,00',
        },
        {
            id: 'HpHEcOwyt2WM1KP0o2_A3',
            name: 'Aplicativo',
            value: 'R$ 10,00',
        },
        {
            id: 'AXei272w2Pi2TWAj7t_37',
            name: 'Estacionamento',
            value: 'R$ 10,00',
        },
        {
            id: 'eC8tJW_iNH9ZrCtcNStEk',
            name: 'Taxa de deslocamento',
            value: 'R$ 10,00',
        },
        {
            id: 'L1VZ5AhvDUkbd99QhmKuZ',
            name: 'Alimentação Organizador',
            value: 'R$ 25,00',
        },
    ],
    costMaterialVariables: [
        {
            id: 'VJzmMdUWnr0JXZg1AlteP',
            name: 'Luva organizador',
            quantity: 18,
            value: 'R$ 1,15',
        },
        {
            id: 'pEqC47cvlTLHfTltqVgPc',
            name: 'Protetor',
            quantity: 18,
            value: 'R$ 1,00',
        },
        {
            id: 'BFOVBjboOfz6RgqC7hNoU',
            name: 'Fita Mtape',
            quantity: 0.5,
            value: 'R$ 90,00',
        },
        {
            id: '_Yu1QH2zj7KIzkMYGtaR8',
            name: 'Gabaritos',
            quantity: 2,
            value: 'R$ 25,00',
        },
    ],
    costActivityVariables: [
        {
            id: 'W0JFi5_OfRghjyXCnxHlq',
            name: 'Compra de produto organizador',
            value: 2,
        },
        {
            id: 'P9_mdF5ePBCBQ4xGQphXU',
            name: 'Treinamento do cliente ou responsável',
            value: 3,
        },
        {
            id: 'PFymP4WjUq0cGzSgWGBA_',
            name: 'Tarefas de finalização do Projeto',
            value: 2,
        },
        {
            id: 'PXJC4kmfL5zBypyphFWNs',
            name: 'Retorno: Visita de aplicabilidade',
            value: 1,
        },
    ],
    environments: [],
};