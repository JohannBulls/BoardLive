package edu.escuelaing.arsw.ASE.app;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * REST controller for handling mouse click data.
 */
@CrossOrigin(origins = "*")
@RestController
public class Controller {

    private List<ClickBoard> clicks = new ArrayList<>();

    /**
     * POST endpoint to add a new mouse click object to the list.
     *
     * @param click Mouseclick object received in the request body.
     */
    @PostMapping("/clicks")
    public void addClick(@RequestBody ClickBoard click) {
        clicks.add(click);
    }

    /**
     * GET endpoint to retrieve all recorded mouse clicks.
     *
     * @return List of Mouseclick objects containing all recorded clicks.
     */
    @GetMapping("/clicks")
    public List<ClickBoard> getClicks() {
        return new ArrayList<>(clicks);
    }

    /**
     * DELETE endpoint to clear all recorded mouse clicks.
     */
    @DeleteMapping("/clicks")
    public void clearClicks() {
        clicks.clear();
    }
}
