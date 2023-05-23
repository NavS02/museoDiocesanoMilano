import FormField from '../FormField'

export default {
    collection: 'ambito',
    fields() {
        return [
            new FormField({ name: 'atbd', label: 'Denominazione', type: 'text', value: '' }),
          
       
           
        ]
    },
    tableFields() {
        return [
            {key:'id',label:'ID',sortable:false},
            {key:'atbm',label:'Atbm',sortable: true},
            {key:'atbr',label:'Atbr',sortable: true},
            
            {key:'actions',label:'Actions',sortable: false},
        ]
    }
}