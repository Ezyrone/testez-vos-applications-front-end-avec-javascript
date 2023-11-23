/**
* @jest-environment jsdom
*/

import { getByTestId } from '@testing-library/dom'

import { router } from './index.js'

describe('unit test for DOM', () => {
    it('should display login page', async() => {
        document.body.innerHTML = 
            `<div id="root">
            </div>`
        document.location = '/'
        await router()
        expect(getByTestId(document.body,"sign-in-form-title").textContent).toEqual("Veuillez vous connecter")
    })

    it('should display captors page', async() => {
        document.body.innerHTML = 
            `<div id="root">
            </div>`
            document.location = '/#/home'
        await router()
        expect(getByTestId(document.body,"home-sensors-title").textContent).toEqual("Vos capteurs")
    })

    it('should display captors details page', async() => {
        document.body.innerHTML = 
            `<div id="root">
            </div>`
            document.location = '/#/facade-details'
        await router()
        expect(getByTestId(document.body,"sensor-detail-title").textContent).toEqual("Détails du capteur #7")
    })

    it('should display captors details page', async() => {
        document.body.innerHTML = 
            `<div id="root">
            </div>`
            document.location = '/#/add-sensor'
        await router()
        expect(getByTestId(document.body,"add-sensor-title").textContent).toEqual("Ajout d'un nouveau capteur")
    })
})