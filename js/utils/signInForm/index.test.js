/**
* @jest-environment jsdom
*/
import '@testing-library/jest-dom'
import { getByRole, getByTestId } from '@testing-library/dom'
import SignInPage from '../../pages/signIn/index' 
import { handleSignInForm } from './index'
import userEvent from '@testing-library/user-event'

beforeEach(() => {
    document.body.innerHTML = SignInPage.render() 
    handleSignInForm()
})
afterEach(() => { 
    document.body.innerHTML = ''
})

describe('integration test', () => {
    it('should return error message', () => {
        // On simule l'entrée thomas@thomas.com
        document.querySelector('#user-email').value = "thomas@thomas.com"
        // On simule un click sur le boutton pour submit la requete
        userEvent.click(getByRole(document.body,"button"))
        // On s'attend a ce que le message d'erreur apparaisse
        expect(getByTestId(document.body, "user-email-error-msg")).not.toHaveClass("hidden")
    })

    it('should return error message for password and good mail', () => {
        // On simule l'entrée thomas@facadia.com qui est la bonne adresse mail
        document.querySelector('#user-email').value = "thomas@facadia.com"
        // On simule un click sur le boutton pour submit la requete
        userEvent.click(getByRole(document.body,"button"))
        // On s'attend a ce que le message d'erreur apparaisse pour le mot de passe
        expect(getByTestId(document.body, "user-password-error-msg")).not.toHaveClass("hidden")
    })
    
    it('should return error message for bad password input but good mail', () => {
        // On simule l'entrée thomas@facadia.com qui est la bonne adresse mail
        document.querySelector('#user-email').value = "thomas@facadia.com"
        // On simule un mauvais mot de passe
        document.querySelector('#user-password').value = "qwerty"
        // On simule un click sur le boutton pour submit la requete
        userEvent.click(getByRole(document.body,"button"))
        // On s'attend a ce que le message d'erreur apparaisse pour le mot de passe
        expect(getByTestId(document.body, "user-password-error-msg")).not.toHaveClass("hidden")
    })

    it('should return  0 error message for good password input and good mail', () => {
        // On simule l'entrée thomas@facadia.com qui est la bonne adresse mail
        document.querySelector('#user-email').value = "thomas@facadia.com";

        // On simule le bon mot de passe
        document.querySelector('#user-password').value = "azerty";

        // On simule un click sur le boutton pour submit la requete
        userEvent.click(getByRole(document.body,"button"));
        
        // On s'attend a ne pas recevoir de message d'erreur
        expect(getByTestId(document.body, "user-password-error-msg")).toHaveClass("hidden")
    })
})