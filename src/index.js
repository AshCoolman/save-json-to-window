module.exports = function (fileName, propertyName, propertyValue) {
    require('fs')
        .writeFileSync(
            fileName,
            'window.' + propertyName + ' = '+ JSON.stringify(propertyValue),
            {flags: 'w'}
        )
    }