package edu.escuelaing.arsw.ASE.app;

/**
 * Represents a mouse click data object.
 */
public class ClickBoard {
    private String color;
    private float x;
    private float y;
    private long timestamp;

    /**
     * Gets the X-coordinate of the mouse click.
     *
     * @return The X-coordinate.
     */
    public float getX() {
        return x;
    }

    /**
     * Sets the X-coordinate of the mouse click.
     *
     * @param x The X-coordinate to set.
     */
    public void setX(float x) {
        this.x = x;
    }

    /**
     * Gets the Y-coordinate of the mouse click.
     *
     * @return The Y-coordinate.
     */
    public float getY() {
        return y;
    }

    /**
     * Sets the Y-coordinate of the mouse click.
     *
     * @param y The Y-coordinate to set.
     */
    public void setY(float y) {
        this.y = y;
    }

    /**
     * Gets the timestamp of the mouse click.
     *
     * @return The timestamp.
     */
    public long getTimestamp() {
        return timestamp;
    }

    /**
     * Sets the timestamp of the mouse click.
     *
     * @param timestamp The timestamp to set.
     */
    public void setTimestamp(long timestamp) {
        this.timestamp = timestamp;
    }

    /**
     * Gets the color associated with the mouse click.
     *
     * @return The color.
     */
    public String getColor() {
        return color;
    }

    /**
     * Sets the color associated with the mouse click.
     *
     * @param color The color to set.
     */
    public void setColor(String color) {
        this.color = color;
    }
}
